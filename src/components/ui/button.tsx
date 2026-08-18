"use client";

import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { Slot } from '@radix-ui/react-slot';

import { cn } from '@/utils/cn';
import { COLORS, RADIUS, ELEVATION, MOTION } from '@/constants/designTokens';

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg font-medium transition-all duration-200',
  {
    variants: {
      variant: {
        default: `bg-accent text-white hover:bg-accent-dark focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:ring-accent/50`,
        secondary: `bg-surface dark:bg-surface-dark text-text-primary hover:bg-gray-100 dark:hover:bg-gray-800 focus-visible:ring-border`,
        outline: `border-2 border-accent text-accent hover:bg-accent/10 focus-visible:ring-accent/50`,
        ghost: `text-text-primary hover:bg-gray-100 dark:hover:bg-gray-800 focus-visible:ring-border`,
        destructive: `bg-red-600 text-white hover:bg-red-700 focus-visible:ring-red-500/50`,
        accent_alt: `bg-accent-alt text-white hover:bg-indigo-600 focus-visible:ring-indigo-500/50`,
      },
      size: {
        default: 'h-10 px-4 py-2.5 text-sm',
        sm: 'h-8 px-3 text-xs',
        lg: 'h-12 px-6 text-base',
        xl: 'h-14 px-8 text-lg',
        icon: 'h-10 w-10',
        'icon-lg': 'h-12 w-12',
      },
      rounded: {
        default: RADIUS.default,
        sm: RADIUS.sm,
        lg: RADIUS.lg,
        pill: RADIUS.pill,
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
      rounded: 'default',
    },
  }
);

const Button = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement> &
    VariantProps<typeof buttonVariants> & {
      asChild?: boolean;
      loading?: boolean;
      leftIcon?: React.ReactNode;
      rightIcon?: React.ReactNode;
    }
>(
  (
    {
      className,
      variant,
      size,
      rounded,
      asChild = false,
      disabled = false,
      loading = false,
      leftIcon,
      rightIcon,
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : 'button';

    return (
      <Comp
        className={cn(buttonVariants({ variant, size, rounded, className }))}
        disabled={disabled || loading}
        ref={ref}
        {...props}
      >
        {loading && (
          <svg
            className="animate-spin -ml-1 mr-2 h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
          </svg>
        )}
        {leftIcon && !loading && <span className="mr-2">{leftIcon}</span>}
        {props.children}
        {rightIcon && !loading && <span className="ml-2">{rightIcon}</span>}
      </Comp>
    );
  }
);

Button.displayName = 'Button';

export { Button, buttonVariants };