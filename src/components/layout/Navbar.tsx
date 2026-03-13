import { Bell, ChevronDown, Calendar } from 'lucide-react';
import SearchInput from '../ui/SearchInput';

export default function Navbar() {
    return (
        <header className="h-20 border-b border-border bg-background/80 backdrop-blur-md flex items-center justify-between px-8 sticky top-0 z-40 transition-all duration-300">
            <div className="flex items-center gap-8">
                {/* Project Selector - Mocking the nixtiotem.com from design */}
                <div className="flex items-center gap-2 px-3 py-1.5 bg-[#1c1d21] border border-border rounded-xl cursor-not-allowed group transition-colors">
                    <span className="text-sm font-medium text-primary">rv4-project.com</span>
                    <ChevronDown size={14} className="text-secondary group-hover:text-brand-gold transition-colors" />
                </div>

                {/* Métricas de Resumen */}
                <div className="hidden lg:flex items-center gap-4 text-sm">
                    <div className="flex items-center gap-2">
                        <span className="text-secondary text-xs uppercase tracking-widest font-bold">Activos Vulnerables</span>
                        <span className="font-bold text-primary">141</span>
                    </div>
                </div>
            </div>

            <div className="flex items-center gap-6">
                {/* Search */}
                <SearchInput />

                {/* Date Display */}
                <div className="hidden md:flex items-center gap-2 px-4 py-2 text-secondary text-sm">
                    <Calendar size={16} className="text-brand-gold" />
                    <span>29 Oct - 11 Nov</span>
                </div>

                {/* Notifications */}
                <div className="flex items-center gap-3">
                    <button className="relative p-2 text-secondary hover:text-brand-gold transition-colors focus:outline-none group">
                        <Bell size={20} />
                        <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-background focus:ring-2 focus:ring-brand-gold"></span>
                    </button>
                </div>
            </div>
        </header>
    );
}

