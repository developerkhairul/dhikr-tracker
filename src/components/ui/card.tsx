"use client";

import React from 'react';
import { cn } from '@/utils/cn';
import { COLORS, RADIUS, ELEVATION } from '@/constants/designTokens';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'elevated' | 'glass';
  className?: string;
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant = 'default', ...props }, ref) => {
    const variantClasses = {
      default: `bg-surface dark:bg-surface-dark border border-border dark:border-border-dark`,
      elevated: `bg-surface dark:bg-surface-dark border border-border dark:border-border-dark shadow-md`,
      glass: `glass border border-white/20 dark:border-gray-700/20`,
    };

    return (
      <div
        ref={ref}
        className={cn(
          `rounded-xl transition-colors duration-200`,
          variantClasses[variant],
          className
        )}
        {...props}
      />
    );
  }
);

Card.displayName = 'Card';

export { Card };