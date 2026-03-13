'use client';

import Link from 'next/link';
import { Search } from 'lucide-react';

export default function NotFoundView() {
    return (
        <div className="flex flex-col items-center justify-center min-h-[70vh] text-center space-y-6">
            <div className="w-24 h-24 bg-card border border-border rounded-3xl flex items-center justify-center shadow-xl">
                <Search size={48} className="text-brand-gold" />
            </div>
            <div className="space-y-2">
                <h1 className="text-6xl font-black text-primary">404</h1>
                <h2 className="text-2xl font-bold text-primary">Página no encontrada</h2>
                <p className="text-secondary max-w-sm mx-auto">
                    Lo sentimos, la página que estás buscando no existe o ha sido movida.
                </p>
            </div>
            <Link
                href="/"
                className="px-8 py-3 bg-brand-gold text-black font-bold rounded-xl hover:scale-105 transition-transform active:scale-95"
            >
                Volver al inicio
            </Link>
        </div>
    );
}
