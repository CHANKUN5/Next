import TrendChart from '@/features/dashboard/TrendChart';
import RiskComparison from '@/features/dashboard/RiskComparison';
import VulnerabilityList from '@/features/dashboard/VulnerabilityList';
import RightActivityPanel from '@/features/dashboard/RightActivityPanel';
import StatCard from '@/components/ui/StatCard';

export const revalidate = 60;

async function getDashboardData() {
    return {
        stats: [
            { title: 'Puntuación Global', value: 78, unit: '/100', trend: '8% mejora', trendUp: true, color: 'gold' as const },
            { title: 'Activos Escaneados', value: '12.4k', trend: '12% mes', trendUp: true, color: 'purple' as const },
            { title: 'Riesgos Críticos', value: 45, trend: '5 nuevas', trendUp: false, color: 'green' as const },
        ]
    };
}

export default async function DashboardPage() {
    const data = await getDashboardData();

    return (
        <div className="flex flex-col xl:flex-row gap-6 min-h-full max-w-[1600px] mx-auto transition-all duration-300">
            <div className="flex-1 space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                    {data.stats.map((stat, i) => (
                        <StatCard key={i} {...stat} />
                    ))}
                </div>

                <div className="grid grid-cols-1 gap-6">
                    <TrendChart />
                    <RiskComparison />
                    <VulnerabilityList />
                </div>
            </div>

            <div className="w-full xl:w-80 shrink-0">
                <RightActivityPanel />
            </div>
        </div>
    );
}
