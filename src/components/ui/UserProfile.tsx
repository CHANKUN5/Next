interface UserProfileProps {
    collapsed?: boolean;
}

export default function UserProfile({ collapsed = false }: UserProfileProps) {
    return (
        <div className={`flex items-center gap-3 transition-opacity duration-300 ${collapsed ? 'justify-center' : 'bg-[#2e2f35] rounded-2xl p-4'}`}>
            <div className={`relative flex-shrink-0 ${collapsed ? 'w-10 h-10' : 'w-10 h-10'}`}>
                <div className="w-full h-full bg-gradient-to-tr from-purple-500 to-indigo-600 rounded-full border-2 border-[#1c1d21]"></div>
                <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-green-500 border-2 border-[#1c1d21] rounded-full"></div>
            </div>

            {!collapsed && (
                <div className="flex-1 min-w-0 transition-all duration-300">
                    <p className="text-sm font-semibold truncate text-primary">Jony Alby</p>
                    <p className="text-xs text-secondary truncate uppercase tracking-tighter">Administrador</p>
                </div>
            )}
        </div>
    );
}
