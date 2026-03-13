'use client';

import { Search } from 'lucide-react';

export default function SearchInput() {
    return (
        <div className="relative group transition-all duration-300">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted group-focus-within:text-white transition-colors">
                <Search size={18} />
            </span>
            <input
                type="text"
                placeholder="Buscar..."
                className="bg-[#1c1d21] border border-[#2e2f35] rounded-xl pl-10 pr-4 py-2 text-sm focus:outline-none focus:border-[#B2914B] focus:ring-1 focus:ring-[#B2914B] w-64 transition-all duration-300 placeholder:text-muted"
            />
        </div>
    );
}
