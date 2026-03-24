import ProjectDetailView from '@/features/projects/ProjectDetailView';

interface ProjectDetailPageProps {
    params: Promise<{ id: string }>;
}

export default async function ProjectDetailPage({ params }: ProjectDetailPageProps) {
    const { id } = await params;
    return <ProjectDetailView id={id} />;
}
