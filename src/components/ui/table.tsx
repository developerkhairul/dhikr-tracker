"use client";

import React from 'react';
import { cn } from '@/utils/cn';

interface TableProps {
  className?: string;
  children: React.ReactNode;
}

export default function Table({ className = '', children }: TableProps) {
  return (
    <table className={cn('w-full text-sm text-left text-text-dark', className)}>
      <thead className="border-b border-border">
        <tr>
          {children.slice(0, 1)}
        </tr>
      </thead>
      <tbody className="divide-y divide-border">{children.slice(1)}</tbody>
    </table>
  );
}

/**
 * Simple Table Header component
 */
export const TableHeader = ({ children }: { children: React.ReactNode }) => (
  <th className="px-6 py-3 text-left text-xs font-medium text-text-muted uppercase tracking-wider">{children}</th>
);

/**
 * Simple Table Body component
 */
export const TableBody = ({ children }: { children: React.ReactNode }) => (
  <td className="px-6 py-4 whitespace-nowrap">{children}</td>
);