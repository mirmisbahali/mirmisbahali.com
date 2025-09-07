import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const projectsDirectory = path.join(process.cwd(), 'src/content');

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

    return {
      slug: folder,
      ...matterResult.data,
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

  // Use remark to convert markdown into HTML string
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();

  // Combine the data with the slug and contentHtml
  return {
    slug,
    contentHtml,
    ...matterResult.data,
  };
}