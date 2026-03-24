import Link from 'next/link';
import { LayoutDashboard, FolderKanban, Users, ArrowRight, Shield, Zap, BarChart3 } from 'lucide-react';
import Button from '@/components/ui/Button';
import StatCard from '@/components/ui/StatCard';

const features = [
    {
        icon: LayoutDashboard,
        title: 'Panel de Control',
        description: 'Métricas en tiempo real y análisis de vulnerabilidades del sistema.',
        href: '/dashboard',
        color: 'from-purple-500/10 to-purple-600/5',
        border: 'border-purple-500/20 hover:border-purple-500/50',
        iconColor: 'text-purple-400',
    },
    {
        icon: FolderKanban,
        title: 'Proyectos',
        description: 'Gestión centralizada de todos los proyectos y sus estados operativos.',
        href: '/projects',
        color: 'from-brand-gold/10 to-yellow-600/5',
        border: 'border-brand-gold/20 hover:border-brand-gold/50',
        iconColor: 'text-brand-gold',
    },
    {
        icon: Users,
        title: 'Estudiantes',
        description: 'Seguimiento y evaluación de participantes en los programas activos.',
        href: '/students',
        color: 'from-cyan-500/10 to-cyan-600/5',
        border: 'border-cyan-500/20 hover:border-cyan-500/50',
        iconColor: 'text-cyan-400',
    },
];

const stats = [
    { title: 'Proyectos Activos', value: '12', color: 'purple' as const },
    { title: 'Vulnerabilidades', value: '372', color: 'gold' as const },
    { title: 'Estudiantes', value: '48', color: 'cyan' as const },
];

export default function HomeView() {
    return (
        <div className="min-h-[calc(100vh-160px)] flex flex-col gap-12">
            <section className="relative flex flex-col items-center justify-center text-center gap-6 py-16 px-4">
                <div className="absolute inset-0 -z-10 overflow-hidden rounded-3xl">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-brand-gold opacity-5 blur-[100px] rounded-full" />
                </div>

                <div className="w-20 h-20 bg-gradient-to-br from-brand-gold to-yellow-600 rounded-2xl flex items-center justify-center shadow-2xl shadow-brand-gold/20">
                    <span className="text-4xl font-black text-black">RV</span>
                </div>

                <div className="space-y-3">
                    <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-primary">
                        Bienvenido a
                        <span className="text-brand-gold"> RV4</span>
                    </h1>
                    <p className="text-secondary text-lg max-w-xl mx-auto leading-relaxed">
                        Plataforma de gestión y métricas de seguridad para proyectos de alto rendimiento.
                    </p>
                </div>

                <div className="flex flex-wrap gap-4 justify-center pt-4">
                    <Button href="/dashboard" size="lg">
                        Ir al Dashboard
                        <ArrowRight size={16} />
                    </Button>
                    <Button href="/projects" variant="secondary" size="lg">
                        Ver Proyectos
                    </Button>
                </div>
            </section>

            <section className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {stats.map((stat) => (
                    <StatCard key={stat.title} {...stat} />
                ))}
            </section>

            <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {features.map(({ icon: Icon, title, description, href, color, border, iconColor }) => (
                    <Link
                        key={href}
                        href={href}
                        className={`group bg-gradient-to-br ${color} border ${border} rounded-2xl p-6 flex flex-col gap-4 transition-all duration-300 hover:scale-[1.02]`}
                    >
                        <div className="flex items-center justify-between">
                            <Icon size={28} className={iconColor} />
                            <ArrowRight size={16} className="text-secondary group-hover:text-primary transition-colors group-hover:translate-x-1 duration-200" />
                        </div>
                        <div className="space-y-1">
                            <h2 className="text-primary font-bold text-lg">{title}</h2>
                            <p className="text-secondary text-sm leading-relaxed">{description}</p>
                        </div>
                    </Link>
                ))}
            </section>
        </div>
    );
}
