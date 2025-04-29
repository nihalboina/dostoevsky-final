'use client';
import { ThemeProvider } from 'next-themes';
import DarkModeToggle from './DarkModeToggle';

export default function ClientProviders({ children }: { children: React.ReactNode }) {
    return (
        <ThemeProvider attribute="class">
            <DarkModeToggle />
            {children}
        </ThemeProvider>
    );
} 