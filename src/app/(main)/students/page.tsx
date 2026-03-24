import { GraduationCap, Mail } from 'lucide-react';
import StatCard from '@/components/ui/StatCard';
import Button from '@/components/ui/Button';
import Badge from '@/components/ui/Badge';

interface Estudiante {
    id: string;
    nombre: string;
    email: string;
    programa: string;
    estado: 'Activo' | 'Pendiente' | 'Inactivo';
    progreso: number;
    ingreso: string;
}

const estudiantes: Estudiante[] = [
    { id: 'e1', nombre: 'Ana García', email: 'ana@rv4.io', programa: 'Seguridad Avanzada', estado: 'Activo', progreso: 87, ingreso: '2025-01-10' },
    { id: 'e2', nombre: 'Carlos Mendoza', email: 'carlos@rv4.io', programa: 'Análisis de Datos', estado: 'Activo', progreso: 72, ingreso: '2025-01-15' },
    { id: 'e3', nombre: 'Laura Torres', email: 'laura@rv4.io', programa: 'Desarrollo Full Stack', estado: 'Pendiente', progreso: 34, ingreso: '2025-02-01' },
    { id: 'e4', nombre: 'Miguel Ríos', email: 'miguel@rv4.io', programa: 'Seguridad Avanzada', estado: 'Activo', progreso: 95, ingreso: '2024-12-01' },
    { id: 'e5', nombre: 'Sofía Vega', email: 'sofia@rv4.io', programa: 'Análisis de Datos', estado: 'Inactivo', progreso: 12, ingreso: '2025-02-14' },
    { id: 'e6', nombre: 'Diego Luna', email: 'diego@rv4.io', programa: 'Desarrollo Full Stack', estado: 'Activo', progreso: 68, ingreso: '2025-01-22' },
];

export default function StudentsPage() {
    const activos = estudiantes.filter((e) => e.estado === 'Activo').length;
    const pendientes = estudiantes.filter((e) => e.estado === 'Pendiente').length;
    const promedioProgreso = Math.round(estudiantes.reduce((acc, e) => acc + e.progreso, 0) / estudiantes.length);

    return (
        <div className="space-y-8">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-black tracking-tighter text-primary">Estudiantes</h1>
                    <p className="text-secondary text-sm mt-1">Seguimiento de participantes en programas activos</p>
                </div>
                <Button size="sm">
                    <GraduationCap size={16} />
                    Nuevo Estudiante
                </Button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <StatCard title="Activos" value={activos} color="green" />
                <StatCard title="Pendientes" value={pendientes} color="gold" />
                <StatCard title="Progreso Medio" value={promedioProgreso} unit="%" color="cyan" />
            </div>

            <div className="bg-card border border-border rounded-2xl overflow-hidden">
                <div className="p-5 border-b border-border">
                    <h2 className="font-bold text-primary">Listado de Estudiantes</h2>
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead>
                            <tr className="border-b border-border">
                                <th className="text-left p-4 text-xs font-black uppercase tracking-widest text-secondary">Estudiante</th>
                                <th className="text-left p-4 text-xs font-black uppercase tracking-widest text-secondary hidden md:table-cell">Programa</th>
                                <th className="text-left p-4 text-xs font-black uppercase tracking-widest text-secondary">Estado</th>
                                <th className="text-left p-4 text-xs font-black uppercase tracking-widest text-secondary hidden lg:table-cell">Progreso</th>
                                <th className="text-left p-4 text-xs font-black uppercase tracking-widest text-secondary hidden lg:table-cell">Ingreso</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-border">
                            {estudiantes.map((estudiante) => (
                                <tr key={estudiante.id} className="hover:bg-[#2e2f35]/30 transition-colors group">
                                    <td className="p-4">
                                        <div className="flex items-center gap-3">
                                            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-brand-gold/20 to-purple-500/20 flex items-center justify-center text-sm font-black text-primary shrink-0">
                                                {estudiante.nombre.charAt(0)}
                                            </div>
                                            <div>
                                                <p className="font-semibold text-primary text-sm">{estudiante.nombre}</p>
                                                <p className="text-xs text-secondary flex items-center gap-1">
                                                    <Mail size={10} />
                                                    {estudiante.email}
                                                </p>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="p-4 hidden md:table-cell">
                                        <p className="text-sm text-secondary">{estudiante.programa}</p>
                                    </td>
                                    <td className="p-4">
                                        <Badge
                                            label={estudiante.estado}
                                            variant={estudiante.estado === 'Activo' ? 'success' : estudiante.estado === 'Pendiente' ? 'warning' : 'default'}
                                        />
                                    </td>
                                    <td className="p-4 hidden lg:table-cell">
                                        <div className="flex items-center gap-3">
                                            <div className="flex-1 h-1.5 bg-[#2e2f35] rounded-full overflow-hidden min-w-[80px]">
                                                <div
                                                    className="h-full bg-brand-gold rounded-full transition-all duration-700"
                                                    style={{ width: `${estudiante.progreso}%` }}
                                                />
                                            </div>
                                            <span className="text-xs font-bold text-primary w-8">{estudiante.progreso}%</span>
                                        </div>
                                    </td>
                                    <td className="p-4 hidden lg:table-cell">
                                        <p className="text-xs text-secondary font-mono">{estudiante.ingreso}</p>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
