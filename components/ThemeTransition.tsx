"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

/**
 * Component that handles smooth transitions when theme changes
 * Prevents flash of unstyled content and adds smooth animations
 */
export function ThemeTransition({ children }: { children: React.ReactNode }) {
    const [mounted, setMounted] = useState(false);
    const { theme } = useTheme();

    useEffect(() => {
        setMounted(true);
    }, []);

    useEffect(() => {
        if (!mounted) return;

        // Add a class to trigger smooth transitions
        document.documentElement.classList.add("theme-transition");

        // Remove the class after transition completes
        const timeout = setTimeout(() => {
            document.documentElement.classList.remove("theme-transition");
        }, 300);

        return () => clearTimeout(timeout);
    }, [theme, mounted]);

    if (!mounted) {
        return <div style={{ visibility: "hidden" }}>{children}</div>;
    }

    return <>{children}</>;
}
