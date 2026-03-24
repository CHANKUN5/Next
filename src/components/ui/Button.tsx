import Link from 'next/link';

interface ButtonProps {
    children: React.ReactNode;
    variant?: 'primary' | 'secondary' | 'ghost';
    href?: string;
    size?: 'sm' | 'md' | 'lg';
}

const variantMap = {
    primary: 'bg-brand-gold hover:bg-yellow-600 text-black font-bold shadow-lg shadow-brand-gold/20',
    secondary: 'bg-card border border-border text-primary hover:border-brand-gold/50 font-semibold',
    ghost: 'text-secondary hover:text-primary font-semibold',
};

const sizeMap = {
    sm: 'px-4 py-1.5 text-xs',
    md: 'px-6 py-2.5 text-sm',
    lg: 'px-8 py-3 text-base',
};

export default function Button({ children, variant = 'primary', href, size = 'md' }: ButtonProps) {
    const base = `inline-flex items-center justify-center gap-2 rounded-xl transition-all duration-200 active:scale-95 ${variantMap[variant]} ${sizeMap[size]}`;

    if (href) {
        return <Link href={href} className={base}>{children}</Link>;
    }

    return <button className={base}>{children}</button>;
}
