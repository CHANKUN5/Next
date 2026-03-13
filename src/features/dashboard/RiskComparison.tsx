'use client';

import { Zap, ArrowUpRight } from 'lucide-react';

export default function RiskComparison() {
    return (
        <div className="bg-card border border-border p-6 rounded-2xl">
            <div className="flex items-center justify-between mb-8">
                <h3 className="text-primary text-xl font-bold tracking-tight">Riesgos encontrados y tipo de riesgo principal</h3>
                <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1.5">
                        <div className="w-2 h-2 rounded-full bg-purple-500"></div>
                        <span className="text-xs text-secondary font-medium uppercase">Alto</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                        <div className="w-2 h-2 rounded-full bg-yellow-400"></div>
                        <span className="text-xs text-secondary font-medium uppercase">Bajo</span>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="relative flex justify-center">
                    <div className="w-32 h-32 bg-indigo-900/20 rounded-full flex items-center justify-center border border-indigo-500/30">
                        <div className="w-24 h-24 bg-gradient-to-br from-purple-600 to-indigo-800 rounded-full flex items-center justify-center shadow-2xl shadow-purple-500/20">
                            <Zap size={48} className="text-white fill-white" />
                        </div>
                    </div>
                </div>

                <div className="space-y-6">
                    <div>
                        <p className="text-secondary text-xs uppercase tracking-widest font-bold mb-1">Activos Totales</p>
                        <div className="flex items-center gap-3">
                            <h4 className="text-3xl font-black text-primary">57,985.07</h4>
                            <span className="px-2 py-0.5 bg-green-500/10 text-green-400 text-[10px] font-bold rounded flex items-center gap-1 border border-green-500/20">
                                0.14% <ArrowUpRight size={10} />
                            </span>
                        </div>
                    </div>

                    <div>
                        <p className="text-secondary text-xs uppercase tracking-widest font-bold mb-1">Activos Vulnerables</p>
                        <div className="flex items-center gap-3">
                            <h4 className="text-3xl font-black text-primary">28,374.12</h4>
                            <span className="px-2 py-0.5 bg-purple-500/10 text-purple-400 text-[10px] font-bold rounded flex items-center gap-1 border border-purple-500/20">
                                0.91% <ArrowUpRight size={10} />
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
