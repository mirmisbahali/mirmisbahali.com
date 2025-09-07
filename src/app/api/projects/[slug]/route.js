import { getProjectData } from '../../../../lib/projects';
import { NextResponse } from 'next/server';

export async function GET(request, { params }) {
  try {
    const projectData = await getProjectData(params.slug);
    return NextResponse.json(projectData);
  } catch (error) {
    return NextResponse.json({ error: 'Project not found' }, { status: 404 });
  }
}