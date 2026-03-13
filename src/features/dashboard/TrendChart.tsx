'use client';

export default function TrendChart() {
    return (
        <div className="bg-card border border-border p-6 rounded-2xl space-y-4">
            <div className="flex items-center justify-between">
                <h3 className="text-primary text-xl font-bold tracking-tight">Tendencia</h3>
                <div className="flex items-center gap-2 bg-[#121316] p-1 rounded-xl border border-border">
                    <button className="px-3 py-1 text-xs font-semibold bg-[#2e2f35] text-white rounded-lg">Alto</button>
                    <button className="px-3 py-1 text-xs font-semibold text-secondary hover:text-white transition-colors">Medio</button>
                    <button className="px-3 py-1 text-xs font-semibold text-secondary hover:text-white transition-colors">Bajo</button>
                </div>
            </div>

            <div className="relative h-48 w-full mt-4 flex items-end gap-1">
                <div className="absolute inset-0 flex items-center justify-center opacity-20 pointer-events-none">
                    <div className="w-full h-[1px] bg-border border-dashed"></div>
                </div>

                <svg className="w-full h-full text-brand-gold" viewBox="0 0 400 100" preserveAspectRatio="none">
                    <path
                        d="M0,80 Q50,20 100,50 T200,30 T300,70 T400,40"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                    />
                    <circle cx="100" cy="50" r="4" fill="#B2914B" />
                    <rect x="80" y="10" width="40" height="20" rx="4" fill="#2e2f35" className="opacity-90" />
                    <text x="85" y="24" fontSize="8" fill="white" className="font-bold">5,674</text>
                </svg>
            </div>

            <div className="flex justify-between text-[10px] text-secondary font-bold uppercase tracking-widest mt-2 px-2">
                <span>29 Oct 2024</span>
                <span>31 Oct 2024</span>
                <span>2 Nov 2024</span>
                <span>4 Nov 2024</span>
                <span>6 Nov 2024</span>
            </div>
        </div>
    );
}
