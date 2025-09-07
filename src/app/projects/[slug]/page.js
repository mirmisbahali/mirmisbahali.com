import { getAllProjectSlugs, getProjectData } from '../../../lib/projects';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';

export async function generateStaticParams() {
  const paths = getAllProjectSlugs();
  return paths.map((path) => ({
    slug: path.params.slug,
  }));
}

export default async function ProjectPage({ params }) {
  const projectData = await getProjectData(params.slug);

  return (
    <div className="min-h-screen bg-[#121212] pt-24">
      <div className="container mx-auto px-4 py-8">
        {/* Back button */}
        <Link
          href="/#projects"
          className="inline-flex items-center text-[#ADB7BE] hover:text-white transition-colors duration-200 mb-8"
        >
          <ArrowLeftIcon className="h-5 w-5 mr-2" />
          Back to Projects
        </Link>

        {/* Project header */}
        <div className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {projectData.title}
          </h1>
          <p className="text-xl text-[#ADB7BE] mb-6">
            {projectData.description}
          </p>
          
          {/* Project tags */}
          <div className="flex flex-wrap gap-2 mb-6">
            {projectData.tag.filter(tag => tag !== 'All').map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 bg-gradient-to-br from-primary-500 to-secondary-500 text-white text-sm rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Project image */}
          {projectData.image && (
            <div className="relative mb-8 h-64 md:h-96 rounded-lg overflow-hidden">
              <Image
                src={projectData.image}
                alt={projectData.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
                priority
              />
            </div>
          )}

          {/* External links */}
          <div className="flex gap-4 mb-8">
            {projectData.previewUrl && projectData.previewUrl !== '/' && (
              <Link
                href={projectData.previewUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-800 text-white font-medium py-2 px-4 rounded-lg transition-all duration-200"
              >
                View Live Project
              </Link>
            )}
            {projectData.gitUrl && projectData.gitUrl !== '/' && (
              <Link
                href={projectData.gitUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center border border-[#ADB7BE] hover:border-white text-[#ADB7BE] hover:text-white font-medium py-2 px-4 rounded-lg transition-all duration-200"
              >
                View Code
              </Link>
            )}
          </div>
        </div>

        {/* Project content */}
        <div className="prose prose-lg prose-invert max-w-none">
          <div
            className="text-white leading-relaxed"
            dangerouslySetInnerHTML={{ __html: projectData.contentHtml }}
          />
        </div>
      </div>
    </div>
  );
}