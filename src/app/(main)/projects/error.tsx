'use client';

import { useEffect } from 'react';
import { AlertTriangle, RefreshCw, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    useEffect(() => {
        console.error(error);
    }, [error]);

    return (
        <div className="flex min-h-[400px] flex-col items-center justify-center p-8 bg-card border border-border rounded-3xl space-y-6 text-center">
            <div className="w-16 h-16 bg-yellow-500/10 rounded-2xl flex items-center justify-center border border-yellow-500/20">
                <AlertTriangle className="text-yellow-400" size={32} />
            </div>

            <div className="space-y-2">
                <h2 className="text-2xl font-black tracking-tighter text-primary uppercase">Error en Proyectos</h2>
                <p className="text-secondary text-sm max-w-md mx-auto leading-relaxed">
                    No pudimos procesar la solicitud para la sección de proyectos.
                </p>
                <p className="text-[10px] text-yellow-400 font-mono mt-2 bg-yellow-400/5 px-2 py-1 rounded">
                    {error.message || 'Error de conexión'}
                </p>
            </div>

            <div className="flex flex-wrap gap-4 justify-center">
                <button
                    onClick={() => reset()}
                    className="flex items-center gap-2 px-6 py-2.5 bg-brand-gold text-black font-bold rounded-xl transition-all hover:scale-105 active:scale-95"
                >
                    <RefreshCw size={18} />
                    Reintentar
                </button>
                <Link
                    href="/"
                    className="flex items-center gap-2 px-6 py-2.5 bg-[#2e2f35] border border-border text-primary font-bold rounded-xl transition-all hover:bg-[#3a3b42]"
                >
                    <ArrowLeft size={18} />
                    Volver al inicio
                </Link>
            </div>
        </div>
    );
}
