"use client";

import React from 'react';

interface EmptyStateProps {
  title?: string;
}

export default function EmptyState({ title = 'No data available' }: EmptyStateProps) {
  return (
    <div className="max-w-6xl mx-auto text-center py-12 text-gray-600">
      <h2 className="text-2xl font-bold mb-8">{title}</h2>
      <p className="text-gray-700">Add some content to see the UI in action.</p>
    </div>
  );
);