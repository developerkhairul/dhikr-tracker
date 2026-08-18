"use client";

import React from 'react';
import { cn } from '@/utils/cn';
import { COLORS, RADIUS, ELEVATION } from '@/constants/designTokens';

interface SwitchProps extends React.SwitchHTMLAttributes<HTMLInputElement> {
  className?: string;
}

const Switch = React.forwardRef<HTMLInputElement, SwitchProps>(
  ({ className, checked, disabled, ...props }, ref) => {
    const disabledClasses = disabled
      ? 'opacity-50 cursor-not-allowed'
      : '';

    const checkedClasses = checked
      ? 'bg-accent-600 shadow-inner'
      : 'bg-surface dark:bg-surface-dark shadow-inner';

    return (
      <div
        className={cn(
          'relative inline-flex items-center cursor-pointer rounded-md transition-colors focus-visible:ring-2 focus-visible:ring-offset-2',
          'w-10 h-5',
          disabledClasses,
          className
        )}
      >
        <span
          className={cn(
            'absolute inset-x-2 top-1 bg-surface dark:bg-surface-dark rounded-full transition-colors shadow-sm',
            checked && 'translate-x-5 bg-accent dark:bg-accent-dark',
            disabled && disabledClasses
          )}
        />
        <input
          {...props}
          ref={ref}
          className="sr-only"
          disabled={disabled}
        />
      </div>
    );
  }
);

Switch.displayName = 'Switch';

export { Switch };