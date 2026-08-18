"use client";

import React from 'react';
import { Card } from '@/components/ui/card';
import { EmptyState } from '@/components/ui/empty-state';
import { Table } from '@/components/ui/table';

const History = () => {
  const [sessions, setSessions] = React.useState([
    { id: 1, date: '2026-08-17', dhikrCount: 142, duaCount: 34, surahCount: 12 },
    { id: 2, date: '2026-08-16', dhikrCount: 128, duaCount: 28, surahCount: 10 },
    { id: 3, date: '2026-08-15', dhikrCount: 156, duaCount: 41, surahCount: 14 },
    { id: 4, date: '2026-08-14', dhikrCount: 97, duaCount: 22, surahCount: 8 },
    { id: 5, date: '2026-08-13', dhikrCount: 134, duaCount: 31, surahCount: 11 },
  ]);

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-text-primary">Session History</h1>

      <Card className="p-6">
        <h2 className="text-lg font-semibold mb-4">Today's Session</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 rounded-lg bg-surface dark:bg-surface-dark">
            <p className="text-sm text-text-secondary">Dhikr</p>
            <p className="text-2xl font-semibold text-accent">{sessions[0]?.dhikrCount}</p>
          </div>
          <div className="p-4 rounded-lg bg-surface dark:bg-surface-dark">
            <p className="text-sm text-text-secondary">Dua</p>
            <p className="text-2xl font-semibold text-success">{sessions[0]?.duaCount}</p>
          </div>
          <div className="p-4 rounded-lg bg-surface dark:bg-surface-dark">
            <p className="text-sm text-text-secondary">Surah</p>
            <p className="text-2xl font-semibold text-warning">{sessions[0]?.surahCount}</p>
          </div>
        </div>
      </Card>

      <Card className="p-6">
        <h2 className="text-lg font-semibold mb-4">Recent Sessions</h2>
        {sessions.length === 0 ? (
          <EmptyState title="No Sessions Yet" description="Your session history will appear here. Start tracking your dhikr to build your history." />
        ) : (
          <Table data={sessions} columns={[
            { key: 'date', header: 'Date' },
            { key: 'dhikrCount', header: 'Dhikr' },
            { key: 'duaCount', header: 'Dua' },
            { key: 'surahCount', header: 'Surah' },
          ]} />
        )}
      </Card>
    </div>
  );
};

export default History;