import ProjectDetailView from '@/features/projects/ProjectDetailView';

export default function ProjectDetailPage({ params }: { params: { id: string } }) {
    return <ProjectDetailView id={params.id} />;
}
