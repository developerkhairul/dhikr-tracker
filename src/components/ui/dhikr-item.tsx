"use client";

import React from 'react';
import { Card } from '✨/components/ui/card';
import { Button } from '✨/components/ui/button';
import { CounterDisplay } from '✨/components/ui/counter-display';
import { Badge } from '✨/components/ui/badge';
import { dhikrVariants } from '✨/components/lang';

interface DhikrItemProps {
  dhikr: {
    id: string;
    name: string;
    type: 'Dhikr' | 'Dua' | 'Surah';
    count: number;
    goal?: number;
  };
}

const DhikrItem = ({ dhikr }: DhikrItemProps) => {
  const progress = dhikr.goal ? Math.min(100, Math.round((dhikr.count / dhikr.goal) * 100)) : 0;

  return (
    <Card variant='default'>
      <div className='flex items-start justify-between mb-3'>
        <div>
          <h3 className='font-semibold text-text-primary'>{dhikr.name}</h3>
          <Badge variant={dhikr.type === 'Dhikr' ? 'primary' : dhikr.type === 'Dua' ? 'success' : 'warning'} className='mt-1'>
            {dhikr.type}
          </Badge>
        </div>
        <MoreVertical className='text-text-secondary' />
      </div>
      <div className='flex items-center justify-between mb-3'>
        <CounterDisplay
          value={dhikr.count}
          size='md'
          variant={dhikr.type === 'Dhikr' ? 'accent' : dhikr.type === 'Dua' ? 'success' : 'warning'}
        />
        <div className='flex gap-1'>
          <Button
            size='icon'
            variant='ghost'
            onClick={() => {
              // Increment count logic would connect to DhikrService
              alert('Incrementing ' + dhikr.name);
            }}
          >
            <Plus className='h-4 w-4' />
          </Button>
          <Button
            size='icon'
            variant='ghost'
            onClick={() => {
              // Reset count logic
              alert('Resetting ' + dhikr.name);
            }}
          >
            <RotateCcw className='h-4 w-4' />
          </Button>
        </div>
      </Card>
    );
  };

  DhikrItem.displayName = 'DhikrItem';
  export default DhikrItem;