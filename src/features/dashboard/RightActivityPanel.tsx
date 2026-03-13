'use client';

import { Settings2, Scan, UserCheck, ShieldCheck } from 'lucide-react';

export default function RightActivityPanel() {
    return (
        <div className="bg-card border border-border p-6 rounded-2xl h-full space-y-8 flex flex-col">
            <div className="space-y-4">
                <h3 className="text-primary text-xl font-bold tracking-tight">Participantes</h3>
                <p className="text-xs text-secondary leading-relaxed">
                    Onboarding: Cómo transformar nuevos registros en usuarios exitosos
                </p>
                <div className="flex -space-x-2">
                    {[1, 2, 3, 4].map((i) => (
                        <div key={i} className="w-8 h-8 rounded-full border-2 border-[#1c1d21] bg-gradient-to-br from-indigo-500/20 to-purple-500/40 border-border"></div>
                    ))}
                    <div className="w-8 h-8 rounded-full border-2 border-[#1c1d21] bg-[#2e2f35] flex items-center justify-center text-[10px] font-bold text-primary">
                        +25
                    </div>
                </div>
            </div>

            <div className="flex-1 space-y-6">
                <div className="flex items-center justify-between">
                    <h3 className="text-primary text-xl font-bold tracking-tight">Últimas acciones</h3>
                    <Settings2 size={16} className="text-secondary cursor-pointer hover:text-brand-gold transition-colors" />
                </div>

                <div className="space-y-4">
                    <ActionItem
                        icon={<Scan size={14} />}
                        title="Escaneo de apple.com completado"
                        time="Hace 3h"
                        color="text-purple-400"
                    />
                    <ActionItem
                        icon={<ShieldCheck size={14} />}
                        title="Escaneo de dribbble.com/nikitinteam completado"
                        time="Hace 1 día"
                        color="text-indigo-400"
                    />
                    <ActionItem
                        icon={<Scan size={14} />}
                        title="Escaneo de nikitinteam.com completado"
                        time="30 Oct 2020"
                        color="text-yellow-400"
                    />
                    <ActionItem
                        icon={<UserCheck size={14} />}
                        title="Permisos para el usuario Alex actualizados"
                        time="30 Oct 2020"
                        color="text-secondary"
                    />
                </div>
            </div>

            <button className="w-full py-3 bg-[#2e2f35] border border-border rounded-2xl text-primary text-sm font-bold hover:bg-[#3a3b42] transition-colors">
                Ver todas las acciones
            </button>
        </div>
    );
}

function ActionItem({ icon, title, time, color }: { icon: any, title: string, time: string, color: string }) {
    return (
        <div className="flex gap-4">
            <div className={`mt-1 h-3 w-3 rounded-full border-2 border-background flex items-center justify-center ${color}`}>
                <div className="w-full h-full rounded-full border border-current"></div>
            </div>
            <div className="space-y-1">
                <p className="text-sm font-medium text-primary leading-tight hover:text-brand-gold cursor-pointer transition-colors">
                    {title}
                </p>
                <p className="text-[10px] text-secondary font-bold uppercase tracking-widest">{time}</p>
            </div>
        </div>
    );
}
