'use client';

import { useState, useCallback, useEffect } from 'react';

interface FetchState<T> {
    data: T | null;
    loading: boolean;
    error: string | null;
}

export function useFetch<T>(fetchFn: () => Promise<T>, immediate = true) {
    const [state, setState] = useState<FetchState<T>>({
        data: null,
        loading: immediate,
        error: null,
    });

    const execute = useCallback(async () => {
        setState((prev) => ({ ...prev, loading: true, error: null }));
        try {
            const data = await fetchFn();
            setState({ data, loading: false, error: null });
            return data;
        } catch (err: any) {
            setState({ data: null, loading: false, error: err.message || 'Error desconocido' });
            throw err;
        }
    }, [fetchFn]);

    useEffect(() => {
        if (immediate) {
            execute().catch(() => { });
        }
    }, [execute, immediate]);

    return { ...state, refetch: execute };
}
