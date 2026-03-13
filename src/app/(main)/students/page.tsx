import { User } from 'lucide-react';

export default function StudentsPage() {
    const students = [
        { id: 1, name: 'Adrian', role: 'Fullstack' },
        { id: 2, name: 'Milagros', role: 'Frontend' },
        { id: 3, name: 'Wilber', role: 'Backend' },
        { id: 4, name: 'Jony', role: 'UX Designer' },
    ];

    return (
        <div className="space-y-6">
            <h1 className="text-3xl font-bold text-primary">Comunidad de Estudiantes</h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {students.map((student) => (
                    <div key={student.id} className="bg-card border border-border p-6 rounded-2xl text-center hover:border-brand-gold/50 transition-all cursor-default group">
                        <div className="w-20 h-20 bg-[#2e2f35] rounded-full mx-auto mb-4 border-2 border-brand-gold/30 group-hover:border-brand-gold transition-all flex items-center justify-center">
                            <User size={32} className="text-secondary group-hover:text-brand-gold transition-colors" />
                        </div>
                        <h3 className="font-bold text-lg text-primary">{student.name}</h3>
                        <p className="text-sm text-brand-gold font-semibold uppercase tracking-tighter">{student.role}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
