'use client';

import { ShieldAlert } from 'lucide-react';

interface ProjectDetailViewProps {
    id: string;
}

export default function ProjectDetailView({ id }: ProjectDetailViewProps) {
    return (
        <div className="space-y-6">
            <div className="bg-[#1c1d21] border border-[#2e2f35] p-8 rounded-3xl relative overflow-hidden">
                <div className="relative z-10">
                    <h1 className="text-4xl font-black mb-2 uppercase tracking-tighter text-primary">Detalle del Proyecto</h1>
                    <p className="text-xl text-secondary mb-6 italic">Identificador único: <span className="text-brand-gold font-mono not-italic">{id}</span></p>

                    <div className="flex flex-wrap gap-4">
                        <div className="bg-[#2e2f35] px-6 py-3 rounded-2xl border border-white/5">
                            <p className="text-[10px] text-secondary uppercase font-black tracking-[0.2em] mb-1">Estado Operativo</p>
                            <p className="text-primary font-bold text-sm">EN REVISIÓN</p>
                        </div>
                        <div className="bg-[#2e2f35] px-6 py-3 rounded-2xl border border-white/5">
                            <p className="text-[10px] text-secondary uppercase font-black tracking-[0.2em] mb-1">Nivel de Riesgo</p>
                            <p className="text-red-400 font-bold text-sm uppercase flex items-center gap-2">
                                <ShieldAlert size={14} />
                                Crítico
                            </p>
                        </div>
                    </div>
                </div>

                <div className="absolute top-0 right-0 w-64 h-64 bg-brand-gold opacity-5 blur-3xl -mr-20 -mt-20 rounded-full"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-[#1c1d21] border border-[#2e2f35] p-8 rounded-3xl">
                    <h2 className="text-lg font-bold mb-4 text-primary uppercase tracking-tight">Análisis de Datos</h2>
                    <p className="text-secondary text-sm leading-relaxed">
                        Esta interfaz presenta una arquitectura desacoplada. Los datos visualizados corresponden al recurso dinámico registrado bajo el identificador global del sistema.
                    </p>
                </div>

                <div className="bg-[#1c1d21] border border-[#2e2f35] p-8 rounded-3xl flex flex-col justify-center">
                    <div className="space-y-3">
                        <div className="h-2 w-full bg-[#2e2f35] rounded-full overflow-hidden">
                            <div className="h-full bg-brand-gold w-3/4"></div>
                        </div>
                        <div className="flex justify-between text-[10px] font-black uppercase text-secondary tracking-widest">
                            <span>Progreso del Análisis</span>
                            <span>75%</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
