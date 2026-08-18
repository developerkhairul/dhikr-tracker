"use client";

import React from 'react';
import Link from 'next/link';
import { useThemeStore } from '@/store/themeStore';
import { SunIcon, MoonIcon } from '@radix-ui/react-icons';
import { cn } from '@/utils/cn';
import { COLORS, THEME_KEYS } from '@/constants/designTokens';
import { useEffect, useRef } from 'react';

const Header = () => {
  const { theme, toggleTheme } = useThemeStore();
  const isMounted = useRef(true);

  useEffect(() => {
    if (!isMounted.current) return;
    document.documentElement.className =
      theme === 'dark' ? 'dark' : 'light';
    isMounted.current = false;
  }, [theme]);

  return (
    <header className={cn('border-b border-border dark:border-border-dark mb-6')}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-stretch gap-4">
        {/* Logo */}
        <Link href="/" className="flex flex-col items-center gap-2">
          <span className="text-2xl font-bold text-accent">Dhikr</span>
          <span className="text-sm text-text-secondary">Tracker</span>
        </Link>

        {/* Nav Links */}
        <nav className="hidden sm:flex gap-6">
          <Link to="/dashboard"
                className="text-text-primary hover:text-accent transition-colors">
            Dashboard
          </Link>
          <Link to="/counter"
                className="text-text-primary hover:text-accent transition-colors">
            Counter
          </Link>
          <Link to="/history"
                className="text-text-primary hover:text-accent transition-colors">
            History
          </Link>
          <Link to="/statistics"
                className="text-text-primary hover:text-accent transition-colors">
            Statistics
          </Link>
        </nav>

        {/* Theme Toggle */}
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={toggleTheme}
            className={cn(
              'p-2.5 rounded-md hover:bg-surface dark:hover:bg-surface-dark transition-colors',
              'focus-visible:ring-2 focus-visible:ring-offset-2',
              theme === 'dark' ? 'bg-surface-dark' : 'bg-surface',
              theme === 'dark' ? 'text-surface' : 'text-text-primary'
            )}
            aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {theme === 'dark' ? (
              <SunIcon className="h-5 w-5 text-accent" />
            ) : (
              <MoonIcon className="h-5 w-5 text-accent" />
            )}
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className={cn('flex flex-col h-10 w-10 p-2 rounded-md hover:bg-surface dark:hover:bg-surface-dark transition-colors')},
          aria-label="Open menu"
        >
          {/* Icon goes here */}
        </button>
      </div>
    </header>
  );
};

export default Header;