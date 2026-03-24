import ProjectsFilter from '@/features/projects/ProjectsFilter';

async function getProjects() {
    return [
        { id: 'p1', name: 'RV4 System', owner: 'Wilber', status: 'Active' },
        { id: 'p2', name: 'UI Library', owner: 'Jony', status: 'Pending' },
        { id: 'p3', name: 'API Gateway', owner: 'Elena', status: 'Archived' },
        { id: 'p4', name: 'Auth Module', owner: 'Valentino', status: 'Active' },
        { id: 'p5', name: 'Database Proxy', owner: 'Wilber', status: 'Pending' },
    ];
}

export default async function ProjectsPage() {
    const initialProjects = await getProjects();

    return (
        <div className="space-y-8">
            <div>
                <h1 className="text-3xl font-black tracking-tighter text-primary">Proyectos</h1>
                <p className="text-secondary text-sm mt-1">Gestión centralizada de recursos y estados operativos</p>
            </div>

            <ProjectsFilter initialProjects={initialProjects} />
        </div>
    );
}
