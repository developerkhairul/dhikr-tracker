"use client";

import React from 'react';
import { cn } from '@/utils/cn';
import { COLORS, RADIUS, ELEVATION, TYPOGRAPHY } from '@/constants/designTokens';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: boolean;
  variant?: 'default' | 'filled' | 'flushed' | 'underlined';
  size?: 'sm' | 'md' | 'lg';
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, error, variant = 'default', size = 'md', ...props }, ref) => {
    const variantClasses = {
      default: `bg-surface dark:bg-surface-dark border border-border dark:border-border-dark`,
      filled: `bg-gray-50 dark:bg-gray-900 border-transparent`,
      flushed: `bg-transparent border-b-2 border-border dark:border-border-dark rounded-none px-0`,
      underlined: `bg-transparent border-b-2 border-accent dark:border-accent-dark rounded-none px-0`,
    };

    const errorClasses = error
      ? 'border-danger focus-visible:ring-danger/50 text-danger'
      : 'focus-visible:ring-accent/50';

    const sizeClasses = {
      sm: 'px-3 py-1.5 text-sm',
      md: 'px-4 py-2.5 text-base',
      lg: 'px-6 py-3 text-lg',
    };

    return (
      <input
        type={type}
        className={cn(
          'w-full rounded-lg transition-all duration-200 placeholder:text-text-disabled',
          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2',
          variantClasses[variant],
          sizeClasses[size],
          errorClasses,
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);

Input.displayName = 'Input';

export { Input };