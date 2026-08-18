"use client";

import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { CounterDisplay } from '@/components/ui/counter-display';
import { Plus, Search, Filter, MoreVertical, RotateCcw } from 'lucide-react';

interface DhikrItem {
  id: number;
  name: string;
  type: 'Dhikr' | 'Dua' | 'Surah';
  count: number;
  goal?: number;
}

const DhikrList = () => {
  const [dhikrs, setDhikrs] = React.useState<DhikrItem[]>([
    { id: 1, name: 'SubhanAllah', type: 'Dhikr', count: 33, goal: 100 },
    { id: 2, name: 'Alhamdulillah', type: 'Dhikr', count: 45, goal: 100 },
    { id: 3, name: 'Allahu Akbar', type: 'Dhikr', count: 34, goal: 100 },
    { id: 4, name: 'Astaghfirullah', type: 'Dhikr', count: 12, goal: 50 },
    { id: 5, name: 'La ilaha illa Allah', type: 'Dhikr', count: 8, goal: 50 },
  ]);
  const [search, setSearch] = React.useState('');
  const [filter, setFilter] = React.useState<'all' | 'Dhikr' | 'Dua' | 'Surah'>('all');

  const filteredDhikrs = dhikrs
    .filter(d => filter === 'all' || d.type === filter)
    .filter(d => d.name.toLowerCase().includes(search.toLowerCase()));

  const handleIncrement = (id: number) => {
    setDhikrs(prev => prev.map(d => d.id === id ? { ...d, count: d.count + 1 } : d));
  };

  const handleReset = (id: number) => {
    setDhikrs(prev => prev.map(d => d.id === id ? { ...d, count: 0 } : d));
  };

  const progress = (d: DhikrItem) => d.goal ? Math.min(100, Math.round((d.count / d.goal) * 100)) : 0;

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <h1 className="text-2xl font-bold text-text-primary">Dhikr List</h1>
        <div className="flex gap-2">
          <Button variant="outline" size="sm" leftIcon={<Filter className="h-4 w-4" />}>
            Filter
          </Button>
          <Button leftIcon={<Plus className="h-4 w-4" />}>Add New</Button>
        </div>
      </div>

      <Card className="p-4">
        <div className="flex flex-col sm:flex-row gap-4">
          <Input
            placeholder="Search dhikr..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="flex-1"
          />
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value as any)}
            className="px-4 py-2 border border-border dark:border-border-dark rounded-lg bg-surface dark:bg-surface-dark"
          >
            <option value="all">All Types</option>
            <option value="Dhikr">Dhikr</option>
            <option value="Dua">Dua</option>
            <option value="Surah">Surah</option>
          </select>
        </div>
      </Card>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredDhikrs.map((dhikr) => (
          <Card key={dhikr.id} className="p-4" variant="default">
            <div className="flex items-start justify-between mb-3">
              <div>
                <h3 className="font-semibold text-text-primary">{dhikr.name}</h3>
                <Badge variant={dhikr.type === 'Dhikr' ? 'primary' : dhikr.type === 'Dua' ? 'success' : 'warning'} className="mt-1">
                  {dhikr.type}
                </Badge>
              </div>
              <MoreVertical className="text-text-secondary" />
            </div>

            <div className="flex items-center justify-between mb-3">
              <CounterDisplay value={dhikr.count} size="md" variant="accent" />
              <div className="flex gap-1">
                <Button size="icon" variant="outline" onClick={() => handleIncrement(dhikr.id)}>
                  <Plus className="h-4 w-4" />
                </Button>
                <Button size="icon" variant="ghost" onClick={() => handleReset(dhikr.id)}>
                  <RotateCcw className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {dhikr.goal && (
              <div>
                <div className="flex justify-between text-xs mb-1">
                  <span className="text-text-secondary">Goal Progress</span>
                  <span className="font-medium">{progress(dhikr)}%</span>
                </div>
                <div className="h-1.5 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-accent rounded-full transition-all duration-300"
                    style={{ width: `${progress(dhikr)}%` }}
                  />
                </div>
              </div>
            )}
          </Card>
        ))}

        {filteredDhikrs.length === 0 && (
          <div className="col-span-full text-center py-12">
            <p className="text-text-secondary">No dhikr found matching your search.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default DhikrList;