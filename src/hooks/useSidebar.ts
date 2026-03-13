'use client';

import { useState } from 'react';

export function useSidebar() {
    const [isCollapsed, setIsCollapsed] = useState(false);

    const toggleSidebar = () => setIsCollapsed(!isCollapsed);
    const expandSidebar = () => setIsCollapsed(false);
    const collapseSidebar = () => setIsCollapsed(true);

    return {
        isCollapsed,
        setIsCollapsed,
        toggleSidebar,
        expandSidebar,
        collapseSidebar,
    };
}
