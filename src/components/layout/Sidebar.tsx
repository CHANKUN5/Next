import Link from 'next/link';
import {
    Home,
    BarChart2,
    Folder,
    Users,
    Settings,
    ChevronLeft,
    ChevronRight,
    LayoutGrid
} from 'lucide-react';
import UserProfile from '../ui/UserProfile';

interface SidebarProps {
    isCollapsed: boolean;
    setIsCollapsed: (value: boolean) => void;
}

export default function Sidebar({ isCollapsed, setIsCollapsed }: SidebarProps) {
    const navItems = [
        { name: 'Inicio', href: '/', icon: Home },
        { name: 'Dashboard', href: '/dashboard', icon: BarChart2 },
        { name: 'Proyectos', href: '/projects', icon: Folder },
        { name: 'Estudiantes', href: '/students', icon: Users },
    ];

    return (
        <aside
            className={`fixed left-0 top-0 h-screen bg-sidebar border-r border-border flex flex-col transition-all duration-300 ease-in-out z-50 ${isCollapsed ? 'w-20' : 'w-64'
                }`}
        >
            <div className={`p-6 flex items-center ${isCollapsed ? 'justify-center' : 'justify-between gap-3'}`}>
                <div className="flex items-center gap-3 overflow-hidden">
                    <div className="w-8 h-8 bg-brand-gold rounded-lg flex items-center justify-center shrink-0">
                        <LayoutGrid size={20} className="text-black" />
                    </div>
                    {!isCollapsed && (
                        <span className="text-xl font-bold tracking-tight text-primary whitespace-nowrap">
                            RV4
                        </span>
                    )}
                </div>

                <button
                    onClick={() => setIsCollapsed(!isCollapsed)}
                    className={`p-1.5 rounded-lg border border-border bg-[#1c1d21] hover:border-brand-gold transition-colors text-secondary hover:text-brand-gold ${isCollapsed ? 'hidden' : 'block'
                        }`}
                >
                    <ChevronLeft size={16} />
                </button>
            </div>

            {isCollapsed && (
                <div className="flex justify-center py-2">
                    <button
                        onClick={() => setIsCollapsed(false)}
                        className="p-1.5 rounded-lg border border-border bg-[#1c1d21] hover:border-brand-gold transition-colors text-secondary hover:text-brand-gold"
                    >
                        <ChevronRight size={16} />
                    </button>
                </div>
            )}

            <nav className="flex-1 px-4 mt-6 space-y-2 overflow-y-auto overflow-x-hidden">
                {navItems.map((item) => {
                    const Icon = item.icon;
                    return (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={`flex items-center gap-3 px-4 py-3 text-sm font-medium rounded-xl transition-all group ${isCollapsed ? 'justify-center px-0' : 'hover:bg-[#2e2f35]'
                                } text-secondary hover:text-brand-gold`}
                        >
                            <Icon size={20} className="shrink-0 transition-transform group-hover:scale-110" />
                            {!isCollapsed && (
                                <span className="whitespace-nowrap opacity-100 transition-opacity duration-300">
                                    {item.name}
                                </span>
                            )}
                        </Link>
                    );
                })}
            </nav>

            <div className="px-4 py-4 space-y-4">
                <Link
                    href="/settings"
                    className={`flex items-center gap-3 px-4 py-3 text-sm font-medium rounded-xl transition-all group ${isCollapsed ? 'justify-center px-0' : 'hover:bg-[#2e2f35]'
                        } text-secondary hover:text-brand-gold`}
                >
                    <Settings size={20} className="shrink-0" />
                    {!isCollapsed && <span className="whitespace-nowrap">Configuración</span>}
                </Link>

                <div className="pt-4 border-t border-border">
                    <UserProfile collapsed={isCollapsed} />
                </div>
            </div>
        </aside>
    );
}

