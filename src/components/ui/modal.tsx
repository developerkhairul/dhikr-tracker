"use client";

import React from 'react';
import { cn } from '@/utils/cn';
import { COLORS, RADIUS, ELEVATION, MOTION } from '@/constants/designTokens';
import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  size?: 'sm' | 'default' | 'lg' | 'xl';
  children: React.ReactNode;
}

const Modal = React.forwardRef<HTMLDivElement, ModalProps>(
  ({ isOpen, onClose, title, size = 'default', children }, ref) => {
    const sizeClasses = {
      sm: 'max-w-md',
      default: 'max-w-lg',
      lg: 'max-w-2xl',
      xl: 'max-w-4xl',
    };

    return (
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-black/50 dark:bg-black/60 flex items-center justify-center p-4"
              onClick={onClose}
            >
              <motion.div
                initial={MOTION.fadeIn.initial}
                animate={MOTION.fadeIn.animate}
                exit={MOTION.fadeIn.exit}
                ref={ref}
                className={cn(
                  'bg-surface dark:bg-surface-dark rounded-xl shadow-xl',
                  'w-full',
                  sizeClasses[size],
                  'focus-visible:outline-none focus-visible:ring-2',
                  'focus-visible:ring-accent/50'
                )}
                onClick={(e) => e.stopPropagation()}
                role="dialog"
                aria-modal="true"
                aria-label={title || 'Modal dialog'}
              >
                <div className="p-6 border-b border-border dark:border-border-dark">
                  <div className="flex items-center justify-between">
                    {title && (
                      <h2 className="text-lg font-semibold text-text-primary">
                        {title}
                      </h2>
                    )}
                    <button
                      onClick={onClose}
                      className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 focus-visible:ring-2 focus-visible:ring-accent/50"
                      aria-label="Close"
                    >
                      <X className="h-5 w-5 text-text-secondary" />
                    </button>
                  </div>
                </div>
                <div className="p-6">{children}</div>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    );
  }
);

Modal.displayName = 'Modal';

export { Modal };