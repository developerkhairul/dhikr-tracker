"use client";

import React from 'react';
import { cn } from '@/utils/cn';
import { motion, AnimatePresence } from 'framer-motion';

interface TabsProps {
  value: string;
  onValueChange: (value: string) => void;
  children: React.ReactNode;
  defaultValue?: string;
  variant?: 'default' | 'outline' | 'underlined';
}

const Tabs = React.forwardRef<HTMLDivElement, TabsProps>(
  ({ value, onValueChange, children, defaultValue = '1', variant = 'default' }) => {
    // Collect all tab triggers and panels from children
    const triggers = React.Children.toArray(children).filter(
      (child): child is React.ElementType => typeof child === 'function' ? false : React.isValidElement(child)
    );

    return (
      <div ref={ref} className="space-y-1.5">
        {/* Tab Triggers */}
        <div className="flex border-b border-border dark:border-border-dark">
          {React.Children.toArray(children).map((child, index) => {
            if (!React.isValidElement(child)) return null;
            const trigger = child.props as React.ComponentPropsWithoutRef<'button'>;
            return (
              <button
                key={index}
                onClick={() => onValueChange(trigger.value)}
                className={cn(
                  'flex-1 rounded-t-none py-2 px-1 text-sm font-medium transition-colors',
                  'data-[state=active]:text-accent',
                  'data-[state=active]:text-accent/80',
                  'data-[state=active]:border-b-2',
                  'data-[state=active]:border-accent',
                  'data-[state=disabled]:cursor-not-allowed',
                  'data-[state=disabled]:opacity-50',
                  'border-b-0 border-transparent',
                  variant === 'outline'
                    ? 'text-text-primary hover:text-accent'
                    : 'text-text-secondary hover:text-accent',
                  value === trigger.value && 'data-[state=active]'
                )}
                disabled={trigger.disabled}
                type="button"
              >
                {trigger.children}
              </button>
            );
          })}
        </div>

        {/* Tab Panels */}
        <div className="pt-2">
          <AnimatePresence>
            {React.Children.toArray(children).map((child, index) => {
              if (!React.isValidElement(child)) return null;
              const panel = child.props as { value: string; children: React.ReactNode; disabled?: boolean };
              return (
                <div
                  key={index}
                  className={cn(
                    'hidden',
                    `data-[value="${panel.value}"]:block`,
                    panel.disabled && 'opacity-50 cursor-not-allowed'
                  )}
                >
                  {panel.children}
                </div>
              );
            })}
          </AnimatePresence>
        </div>
      </div>
    );
  }
);

Tabs.displayName = 'Tabs';

export { Tabs };