"use client";

import React from 'react';
import { cn } from '@/utils/cn';
import { COLORS, TYPOGRAPHY } from '@/constants/designTokens';

interface CounterDisplayProps {
  value: number;
  label?: string;
  variant?: 'default' | 'accent' | 'success' | 'warning' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  showAnimation?: boolean;
}

const CounterDisplay = React.forwardRef<HTMLDivElement, CounterDisplayProps>(
  ({ value, label, variant = 'default', size = 'md', showAnimation = true }, ref) => {
    const variantClasses = {
      default: 'text-text-primary',
      accent: 'text-accent',
      success: 'text-green-600 dark:text-green-400',
      warning: 'text-yellow-600 dark:text-yellow-400',
      danger: 'text-danger',
    };

    const sizeClasses = {
      sm: TYPOGRAPHY.scale.h4,
      md: TYPOGRAPHY.scale.h3,
      lg: TYPOGRAPHY.scale.h2,
    };

    const formatValue = (val: number): string => {
      return val.toLocaleString();
    };

    return (
      <div
        ref={ref}
        className={cn(
          'tabular-nums font-display font-semibold transition-all duration-300',
          sizeClasses[size],
          variantClasses[variant]
        )}
      >
        <div className="tabular-nums font-display font-semibold">
          {formatValue(value)}
        </div>
        {label && (
          <div className="text-sm font-normal text-text-secondary mt-1">
            {label}
          </div>
        )}
      </div>
    );
  }
);

CounterDisplay.displayName = 'CounterDisplay';

export { CounterDisplay };