'use client';

import { useState, useCallback } from 'react';

export function useToggle(initialState: boolean = false) {
    const [state, setState] = useState(initialState);

    const toggle = useCallback(() => setState((s) => !s), []);
    const setTrue = useCallback(() => setState(true), []);
    const setFalse = useCallback(() => setState(false), []);

    return [state, { toggle, setTrue, setFalse }] as const;
}
