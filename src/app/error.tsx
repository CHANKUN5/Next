'use client';

import ErrorView from '@/features/errors/ErrorView';

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    return <ErrorView reset={reset} />;
}
