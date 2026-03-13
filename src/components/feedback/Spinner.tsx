'use client';

export default function Spinner() {
    return (
        <div className="flex items-center justify-center p-8">
            <div className="relative w-12 h-12">
                <div className="absolute inset-0 border-4 border-brand-gold/20 rounded-full"></div>
                <div className="absolute inset-0 border-4 border-brand-gold border-t-transparent rounded-full animate-spin"></div>
            </div>
        </div>
    );
}
