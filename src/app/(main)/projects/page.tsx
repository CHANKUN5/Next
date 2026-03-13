import Link from 'next/link';

export default function ProjectsPage() {
    const projects = [
        { id: 'p1', name: 'RV4 System', owner: 'Wilber', status: 'Active' },
        { id: 'p2', name: 'UI Library', owner: 'Jony', status: 'Pending' },
        { id: 'p3', name: 'API Gateway', owner: 'Elena', status: 'Archived' },
    ];

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <h1 className="text-3xl font-bold">Listado de Proyectos</h1>
                <button className="bg-[#7e3af2] hover:bg-[#6c2bd9] text-white px-4 py-2 rounded-xl text-sm font-semibold transition-colors">
                    Nuevo Proyecto
                </button>
            </div>

            <div className="grid grid-cols-1 gap-4">
                {projects.map((project) => (
                    <Link
                        key={project.id}
                        href={`/projects/${project.id}`}
                        className="bg-[#1c1d21] border border-[#2e2f35] p-6 rounded-2xl flex items-center justify-between hover:border-[#7e3af2] transition-colors"
                    >
                        <div>
                            <h3 className="text-lg font-bold">{project.name}</h3>
                            <p className="text-sm text-gray-400">Responsable: {project.owner}</p>
                        </div>
                        <div className="flex items-center gap-4">
                            <span className={`text-xs px-3 py-1 rounded-full font-bold ${project.status === 'Active' ? 'bg-green-500/10 text-green-400' :
                                    project.status === 'Pending' ? 'bg-yellow-500/10 text-yellow-400' :
                                        'bg-gray-500/10 text-gray-400'
                                }`}>
                                {project.status}
                            </span>
                            <span className="text-gray-400">→</span>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}
