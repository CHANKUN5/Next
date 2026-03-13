'use client';

import { AlertCircle, CheckCircle2, Info, XCircle } from 'lucide-react';

type AlertType = 'info' | 'success' | 'warning' | 'error';

interface AlertProps {
    type?: AlertType;
    message: string;
    description?: string;
}

const icons = {
    info: <Info className="text-blue-400" size={20} />,
    success: <CheckCircle2 className="text-green-400" size={20} />,
    warning: <AlertCircle className="text-yellow-400" size={20} />,
    error: <XCircle className="text-red-400" size={20} />,
};

const styles = {
    info: 'bg-blue-500/10 border-blue-500/20',
    success: 'bg-green-500/10 border-green-500/20',
    warning: 'bg-yellow-500/10 border-yellow-500/20',
    error: 'bg-red-500/10 border-red-500/20',
};

export default function Alert({ type = 'info', message, description }: AlertProps) {
    return (
        <div className={`p-4 rounded-2xl border ${styles[type]} flex gap-3`}>
            <div className="shrink-0 mt-0.5">{icons[type]}</div>
            <div className="space-y-1">
                <p className="text-sm font-bold text-primary">{message}</p>
                {description && <p className="text-xs text-secondary leading-relaxed">{description}</p>}
            </div>
        </div>
    );
}
