import { notFound } from 'next/navigation';
import { getProjectData, getAllProjectSlugs } from '../../../lib/projects';
import ProjectPageContent from './ProjectPageContent';

export async function generateStaticParams() {
  return getAllProjectSlugs().map(p => p.params);
}

export default async function ProjectPage({ params }) {
  const { slug } = await params;

  let projectData;
  try {
    projectData = await getProjectData(slug);
  } catch {
    notFound();
  }

  return <ProjectPageContent projectData={projectData} />;
}
