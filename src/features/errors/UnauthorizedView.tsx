'use client';

import { ShieldAlert, LogIn } from 'lucide-react';
import Link from 'next/link';

export default function UnauthorizedView() {
    return (
        <div className="flex flex-col items-center justify-center min-h-[70vh] text-center space-y-6">
            <div className="w-24 h-24 bg-yellow-400/10 border border-yellow-400/20 rounded-3xl flex items-center justify-center shadow-xl">
                <ShieldAlert size={48} className="text-yellow-400" />
            </div>
            <div className="space-y-2">
                <h1 className="text-4xl font-black text-primary">401</h1>
                <h2 className="text-2xl font-bold text-primary">Acceso no autorizado</h2>
                <p className="text-secondary max-w-sm mx-auto">
                    No tienes permisos suficientes para ver esta sección. Por favor, inicia sesión con una cuenta autorizada.
                </p>
            </div>
            <Link
                href="/login"
                className="flex items-center gap-2 px-8 py-3 bg-brand-gold text-black font-bold rounded-xl hover:scale-105 transition-transform active:scale-95"
            >
                <LogIn size={18} />
                Ir al inicio de sesión
            </Link>
        </div>
    );
}
