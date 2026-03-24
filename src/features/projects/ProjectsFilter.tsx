'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Search, Plus, ArrowRight, Loader2 } from 'lucide-react';
import Badge from '@/components/ui/Badge';

interface Project {
    id: string;
    name: string;
    owner: string;
    status: 'Active' | 'Pending' | 'Archived' | string;
}

interface ProjectsFilterProps {
    initialProjects: Project[];
}

export default function ProjectsFilter({ initialProjects }: ProjectsFilterProps) {
    const [query, setQuery] = useState('');
    const [projects, setProjects] = useState<Project[]>(initialProjects);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (!query.trim()) {
            setProjects(initialProjects);
            setLoading(false);
            return;
        }

        const controller = new AbortController();
        const signal = controller.signal;

        const performSearch = async () => {
            setLoading(true);
            setError(null);

            try {
                await new Promise((resolve) => setTimeout(resolve, 500));

                if (signal.aborted) return;

                const filtered = initialProjects.filter(p =>
                    p.name.toLowerCase().includes(query.toLowerCase()) ||
                    p.owner.toLowerCase().includes(query.toLowerCase())
                );

                setProjects(filtered);
                setLoading(false);
            } catch (err: any) {
                if (err.name !== 'AbortError') {
                    setError('Error en la búsqueda');
                    setLoading(false);
                }
            }
        };

        performSearch();

        return () => controller.abort();
    }, [query, initialProjects]);

    return (
        <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="relative flex-1 max-w-md">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-secondary" size={18} />
                    <input
                        type="text"
                        placeholder="Buscar proyectos por nombre o responsable..."
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        className="w-full bg-card border border-border rounded-xl py-2.5 pl-10 pr-4 text-sm focus:border-brand-gold outline-none transition-colors"
                    />
                </div>
                <button className="flex items-center gap-2 bg-brand-gold hover:bg-yellow-600 text-black px-4 py-2.5 rounded-xl text-sm font-bold transition-colors shrink-0">
                    <Plus size={18} />
                    Nuevo Proyecto
                </button>
            </div>

            {loading && (
                <div className="flex items-center justify-center py-12">
                    <Loader2 className="animate-spin text-brand-gold" size={32} />
                </div>
            )}

            {error && (
                <div className="bg-red-500/10 border border-red-500/20 p-4 rounded-xl text-red-400 text-sm">
                    {error}
                </div>
            )}

            {!loading && !error && projects.length === 0 && (
                <div className="text-center py-12 bg-card border border-border border-dashed rounded-3xl">
                    <p className="text-secondary font-bold uppercase tracking-widest text-xs">No se encontraron proyectos</p>
                </div>
            )}

            {!loading && !error && projects.length > 0 && (
                <div className="grid grid-cols-1 gap-4">
                    {projects.map((project) => (
                        <Link
                            key={project.id}
                            href={`/projects/${project.id}`}
                            className="group bg-card border border-border p-6 rounded-2xl flex items-center justify-between hover:border-brand-gold/40 hover:bg-[#2e2f35]/10 transition-all duration-300"
                        >
                            <div className="flex items-center gap-5">
                                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-brand-gold/20 to-purple-500/20 flex items-center justify-center text-lg font-black text-brand-gold border border-brand-gold/10">
                                    {project.name.charAt(0)}
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-primary group-hover:text-brand-gold transition-colors">{project.name}</h3>
                                    <p className="text-xs text-secondary font-bold uppercase tracking-widest">Responsable: {project.owner}</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-6">
                                <Badge
                                    label={project.status}
                                    variant={project.status === 'Active' ? 'success' : project.status === 'Pending' ? 'warning' : 'default'}
                                />
                                <ArrowRight className="text-secondary group-hover:translate-x-1 group-hover:text-primary transition-all" size={18} />
                            </div>
                        </Link>
                    ))}
                </div>
            )}
        </div>
    );
}
