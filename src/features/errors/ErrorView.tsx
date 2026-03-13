'use client';

import { AlertTriangle, RefreshCcw } from 'lucide-react';

interface ErrorViewProps {
    reset: () => void;
}

export default function ErrorView({ reset }: ErrorViewProps) {
    return (
        <div className="flex flex-col items-center justify-center min-h-[70vh] text-center space-y-6">
            <div className="w-24 h-24 bg-red-500/10 border border-red-500/20 rounded-3xl flex items-center justify-center shadow-xl">
                <AlertTriangle size={48} className="text-red-400" />
            </div>
            <div className="space-y-2">
                <h1 className="text-6xl font-black text-primary">500</h1>
                <h2 className="text-2xl font-bold text-primary">Error del servidor</h2>
                <p className="text-secondary max-w-sm mx-auto">
                    Ha ocurrido un error inesperado. Nuestro equipo técnico ha sido notificado.
                </p>
            </div>
            <button
                onClick={() => reset()}
                className="flex items-center gap-2 px-8 py-3 bg-[#2e2f35] border border-border text-primary font-bold rounded-xl hover:bg-[#3a3b42] transition-colors"
            >
                <RefreshCcw size={18} />
                Intentar de nuevo
            </button>
        </div>
    );
}
