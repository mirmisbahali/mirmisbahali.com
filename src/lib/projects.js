import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const projectsDirectory = path.join(process.cwd(), 'src/content');
const publicDirectory = path.join(process.cwd(), 'public');

// Asset processing utility
function processProjectAssets(projectSlug) {
  const assetsDir = path.join(projectsDirectory, projectSlug, 'assets');
  const publicAssetsDir = path.join(publicDirectory, 'projects', projectSlug);
  
  // Check if assets directory exists
  if (!fs.existsSync(assetsDir)) {
    return [];
  }
  
  // Ensure public assets directory exists
  if (!fs.existsSync(publicAssetsDir)) {
    fs.mkdirSync(publicAssetsDir, { recursive: true });
  }
  
  // Get all files in assets directory
  const assetFiles = fs.readdirSync(assetsDir);
  const processedAssets = [];
  
  assetFiles.forEach(file => {
    const sourcePath = path.join(assetsDir, file);
    const destinationPath = path.join(publicAssetsDir, file);
    
    // Copy file to public directory
    try {
      fs.copyFileSync(sourcePath, destinationPath);
      
      // Store asset info for path processing
      processedAssets.push({
        originalPath: `./assets/${file}`,
        publicPath: `/projects/${projectSlug}/${file}`,
        filename: file
      });
    } catch (error) {
      console.warn(`Failed to copy asset: ${file}`, error);
    }
  });
  
  return processedAssets;
}

// Process image paths in content
function processImagePaths(content, assets) {
  let processedContent = content;
  
  assets.forEach(asset => {
    // Replace relative paths with public paths
    processedContent = processedContent.replace(
      new RegExp(asset.originalPath.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g'),
      asset.publicPath
    );
  });
  
  return processedContent;
}

// Process frontmatter image paths
function processFrontmatterImage(imageValue, assets) {
  if (!imageValue || imageValue.startsWith('http') || imageValue.startsWith('/')) {
    return imageValue; // Already processed or external URL
  }
  
  const matchingAsset = assets.find(asset => 
    asset.originalPath === imageValue || asset.originalPath.endsWith(imageValue)
  );
  
  return matchingAsset ? matchingAsset.publicPath : imageValue;
}

export function getAllProjectSlugs() {
  const projectFolders = fs.readdirSync(projectsDirectory);
  return projectFolders.map((folder) => ({
    params: {
      slug: folder,
    },
  }));
}

export function getAllProjects() {
  const projectFolders = fs.readdirSync(projectsDirectory);
  const allProjects = projectFolders.map((folder) => {
    const fullPath = path.join(projectsDirectory, folder, 'README.md');
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const matterResult = matter(fileContents);

    // Process project assets
    const assets = processProjectAssets(folder);
    
    // Process frontmatter image path
    const processedData = { ...matterResult.data };
    if (processedData.image) {
      processedData.image = processFrontmatterImage(processedData.image, assets);
    }

    return {
      slug: folder,
      ...processedData,
      assets, // Include assets info for future use
    };
  });

  // Sort projects by id
  return allProjects.sort((a, b) => a.id - b.id);
}

export function getAllCategories() {
  const projectFolders = fs.readdirSync(projectsDirectory);
  const allTags = new Set(['All']); // Always include "All" as the first category

  projectFolders.forEach((folder) => {
    const fullPath = path.join(projectsDirectory, folder, 'README.md');
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const matterResult = matter(fileContents);
    
    // Extract tags from frontmatter and add to the set
    if (matterResult.data.tag && Array.isArray(matterResult.data.tag)) {
      matterResult.data.tag.forEach(tag => {
        if (tag !== 'All') { // Don't add "All" multiple times
          allTags.add(tag);
        }
      });
    }
  });

  // Convert Set to Array and ensure "All" is first
  return ['All', ...Array.from(allTags).filter(tag => tag !== 'All').sort()];
}

export async function getProjectData(slug) {
  const fullPath = path.join(projectsDirectory, slug, 'README.md');
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const matterResult = matter(fileContents);

  // Process project assets
  const assets = processProjectAssets(slug);
  
  // Process image paths in markdown content
  const processedMarkdown = processImagePaths(matterResult.content, assets);
  
  // Use remark to convert markdown into HTML string
  const processedContent = await remark()
    .use(html)
    .process(processedMarkdown);
  const contentHtml = processedContent.toString();

  // Process frontmatter image path
  const processedData = { ...matterResult.data };
  if (processedData.image) {
    processedData.image = processFrontmatterImage(processedData.image, assets);
  }

  // Combine the data with the slug and contentHtml
  return {
    slug,
    contentHtml,
    ...processedData,
    assets, // Include assets info
  };
}