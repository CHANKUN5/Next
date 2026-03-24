import Link from 'next/link';

interface User {
    id: number;
    name: string;
    email: string;
    company: {
        name: string;
    };
}

export default async function TestFetchPage() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users', {
        next: { revalidate: 3600 }
    });

    if (!res.ok) {
        throw new Error('Error al obtener datos de prueba');
    }

    const users: User[] = await res.json();

    return (
        <div className="p-8 space-y-6">
            <div className="flex items-center gap-4">
                <Link href="/" className="text-brand-gold hover:underline text-sm font-bold">← Volver</Link>
                <h1 className="text-3xl font-black tracking-tighter text-primary">Prueba de Fetch Servidor</h1>
            </div>

            <div className="bg-card border border-border rounded-2xl overflow-hidden">
                <div className="p-4 border-b border-border bg-[#2e2f35]/20">
                    <p className="text-xs text-secondary font-bold uppercase tracking-widest">
                        Datos cargados desde el servidor (JSONPlaceholder)
                    </p>
                </div>
                <div className="divide-y divide-border">
                    {users.map((user) => (
                        <div key={user.id} className="p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2 hover:bg-[#2e2f35]/10 transition-colors">
                            <div>
                                <p className="font-bold text-primary">{user.name}</p>
                                <p className="text-xs text-secondary">{user.email}</p>
                            </div>
                            <div className="text-right">
                                <span className="text-[10px] font-black uppercase text-brand-gold bg-brand-gold/10 px-2 py-0.5 rounded border border-brand-gold/20">
                                    {user.company.name}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="bg-blue-500/10 border border-blue-500/20 p-4 rounded-xl">
                <p className="text-xs text-blue-400 font-bold leading-relaxed">
                    Nota: Esta página no realiza ninguna llamada a API desde el navegador.
                    Los datos ya vienen embebidos en el HTML generado por el servidor de Next.js.
                </p>
            </div>
        </div>
    );
}
