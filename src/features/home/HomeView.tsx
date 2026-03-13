'use client';

export default function HomeView() {
    return (
        <main className="flex min-h-[calc(100vh-160px)] flex-col items-center justify-center p-24 bg-card border border-border rounded-3xl">
            <div className="text-center space-y-4">
                <div className="w-20 h-20 bg-brand-gold rounded-2xl mx-auto flex items-center justify-center shadow-2xl shadow-brand-gold/20">
                    <span className="text-4xl font-black text-black">RV</span>
                </div>
                <h1 className="text-5xl font-black tracking-tighter text-primary">BIENVENIDO A RV4</h1>
                <p className="text-secondary max-w-md mx-auto">
                    Plataforma de gestión y métricas de seguridad para proyectos de alto rendimiento.
                </p>
                <div className="pt-8">
                    <button className="px-8 py-3 bg-brand-gold text-black font-bold rounded-xl hover:scale-105 transition-transform active:scale-95">
                        Empezar ahora
                    </button>
                </div>
            </div>
        </main>
    );
}
