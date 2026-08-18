"use client";

import React from 'react';
import CounterDisplay from '@/components/ui/counter-display';
import { Button } from '@/components/ui/button';
import { Modal } from '@/components/ui/modal';
import useState from 'react';

interface CounterModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CounterModal: React.ComponentType<CounterModalProps> = ({ isOpen, onClose }) => {
  const [count, setCount] = React.useState(0);

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <h2 className="text-xl font-semibold">Dhikr Counter</h2>
      <CounterDisplay value={count} label="Total Recitations" />
      <div className="flex gap-2 mt-4">
        <Button variant="accent" onClick={() => setCount(count + 1)} disabled={count >= 1000}>
          Increment
        </Button>
        <Button variant="outline" onClick={onClose}>Close</Button>
      </div>
    </Modal>
  );
};