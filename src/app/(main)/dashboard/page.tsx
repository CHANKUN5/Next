import TrendChart from '@/features/dashboard/TrendChart';
import RiskComparison from '@/features/dashboard/RiskComparison';
import VulnerabilityList from '@/features/dashboard/VulnerabilityList';
import RightActivityPanel from '@/features/dashboard/RightActivityPanel';

export default function DashboardPage() {
    return (
        <div className="flex flex-col xl:flex-row gap-6 min-h-full max-w-[1600px] mx-auto transition-all duration-300">
            {/* Main Content Area */}
            <div className="flex-1 space-y-6">
                <div className="grid grid-cols-1 gap-6">
                    <TrendChart />
                    <RiskComparison />
                    <VulnerabilityList />
                </div>
            </div>

            {/* Right Sidebar Area */}
            <div className="w-full xl:w-80 shrink-0">
                <RightActivityPanel />
            </div>
        </div>
    );
}

