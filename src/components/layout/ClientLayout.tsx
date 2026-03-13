'use client';

import { useSidebar } from '@/hooks/useSidebar';
import Sidebar from './Sidebar';
import Navbar from './Navbar';

export default function ClientLayout({ children }: { children: React.ReactNode }) {
    const { isCollapsed, setIsCollapsed } = useSidebar();

    return (
        <div className="flex min-h-screen bg-background">
            <Sidebar isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} />

            <div className={`flex-1 flex flex-col transition-all duration-300 ${isCollapsed ? 'pl-20' : 'pl-64'}`}>
                <Navbar />
                <main className="flex-1 p-8 overflow-auto">
                    {children}
                </main>
            </div>
        </div>
    );
}
