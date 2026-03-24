interface StatCardProps {
    title: string;
    value: string | number;
    unit?: string;
    trend?: string;
    trendUp?: boolean;
    color?: 'gold' | 'purple' | 'cyan' | 'green';
}

const colorMap = {
    gold: 'border-brand-gold/20 from-brand-gold/10',
    purple: 'border-purple-500/20 from-purple-500/10',
    cyan: 'border-cyan-500/20 from-cyan-500/10',
    green: 'border-green-500/20 from-green-500/10',
};

const valueColorMap = {
    gold: 'text-brand-gold',
    purple: 'text-purple-400',
    cyan: 'text-cyan-400',
    green: 'text-green-400',
};

export default function StatCard({ title, value, unit, trend, trendUp = true, color = 'gold' }: StatCardProps) {
    return (
        <div className={`bg-gradient-to-br ${colorMap[color]} to-transparent border ${colorMap[color].split(' ')[0]} bg-card rounded-2xl p-6 space-y-2`}>
            <p className="text-xs text-secondary font-black uppercase tracking-widest">{title}</p>
            <div className="flex items-end gap-2">
                <p className={`text-3xl font-black ${valueColorMap[color]}`}>{value}</p>
                {unit && <p className="text-secondary text-sm font-semibold pb-1">{unit}</p>}
            </div>
            {trend && (
                <p className={`text-xs font-bold ${trendUp ? 'text-green-400' : 'text-red-400'}`}>
                    {trendUp ? '↑' : '↓'} {trend}
                </p>
            )}
        </div>
    );
}
