interface BadgeProps {
    label: string;
    variant?: 'success' | 'warning' | 'danger' | 'default' | 'info';
}

const variantMap = {
    success: 'bg-green-500/10 text-green-400 border border-green-500/20',
    warning: 'bg-yellow-500/10 text-yellow-400 border border-yellow-500/20',
    danger: 'bg-red-500/10 text-red-400 border border-red-500/20',
    info: 'bg-cyan-500/10 text-cyan-400 border border-cyan-500/20',
    default: 'bg-[#2e2f35] text-secondary border border-border',
};

export default function Badge({ label, variant = 'default' }: BadgeProps) {
    return (
        <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-[11px] font-bold ${variantMap[variant]}`}>
            {label}
        </span>
    );
}
