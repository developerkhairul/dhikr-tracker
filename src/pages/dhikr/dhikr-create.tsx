"use client";

import React from 'react';
import { useState, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { CounterDisplay } from '@/components/ui/counter-display';
import { Plus } from 'lucide-react';

interface DhikrFormValues {
  name: string;
  type: 'Dhikr' | 'Dua' | 'Surah';
  goal?: number;
  start?: string;
  end?: string;
}

const DhikrCreate = () => {
  const [form, setForm] = useState<DhikrFormValues>({
    name: '',
    type: 'Dhikr',
    goal: undefined,
  });
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<boolean>(false);
  const nameRef = useRef<HTMLInputElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name: fieldName } = e.target;
    setForm(prev => ({ ...prev, [fieldName]: value }));
  };

  const handleSubmit = (e: Event) => {
    e.preventDefault();
    setError(null);
    setSuccess(false);

    // Validate
    if (!form.name.trim()) {
      setError('Name is required');
      return;
    }

    if (form.goal && form.goal < 1) {
      setError('Goal must be at least 1');
      return;
    }

    // Simulate save
    setTimeout(() => {
      setSuccess(true);
      setForm({
        name: '',
        type: 'Dhikr',
        goal: undefined,
      });
      if (nameRef.current) {
        nameRef.current.focus();
      }
    }, 500);
  };

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-text-primary">New Dhikr</h1>

      {success && (
        <div className="bg-green-100 dark:bg-green-900/30 p-4 rounded-lg text-green-800 dark:text-green-400">
          <span className="font-medium">Dhikr created successfully!</span>
        </div>
      )}

      <form className="p-6 space-y-4" onSubmit={handleSubmit}>
        <h2 className="text-lg font-semibold mb-4">{success ? 'Created!' : 'Add New Dhikr'}</h2>

        {error && <p className="text-sm text-red-500 mb-4">{error}</p>}

        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm text-text-primary mb-1.5">Name:</label>
            <Input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              ref={nameRef}
            />
          </div>

          <div>
            <label className="block text-sm text-text-primary mb-1.5">Type:</label>
            <select name="type" value={form.type} onChange={handleChange} className="w-full rounded-lg border border-border dark:border-border-dark bg-surface dark:bg-surface-dark px-3 py-2">
              <option value="Dhikr">Dhikr</option>
              <option value="Dua">Dua</option>
              <option value="Surah">Surah</option>
            </select>
          </div>

          <div>
            <label className="block text-sm text-text-primary mb-1.5">Goal:</label>
            <div className="flex items-center gap-2">
              <Input
                type="number"
                name="goal"
                value={form.goal ?? ''}
                onChange={(e) => handleChange(e.target)}
                min="1"
                className="w-20 text-center rounded border border-border dark:border-border-dark bg-surface dark:bg-surface-dark"
              />
              <span className="text-text-secondary">recitations</span>
            </div>
          </div>

          <div>
            <label className="block text-sm text-text-primary mb-1.5">Start:</label>
            <Input
              type="date"
              name="start"
              value={form.start ?? ''}
              onChange={(e) => handleChange(e.target)}
              className="w-full rounded-lg border border-border dark:border-border-dark bg-surface dark:bg-surface-dark px-3 py-2"
            />
          </div>

          <div>
            <label className="block text-sm text-text-primary mb-1.5">End:</label>
            <Input
              type="date"
              name="end"
              value={form.end ?? ''}
              onChange={(e) => handleChange(e.target)}
              className="w-full rounded-lg border border-border dark:border-border-dark bg-surface dark:bg-surface-dark px-3 py-2"
            />
          </div>
        </div>

        <div className="flex gap-2 mt-6">
          <Button variant="outline" type="button" onClick={() => setForm({ name: '', type: 'Dhikr', goal: undefined })}>
            Cancel
          </Button>
          <Button type="submit">Create Dhikr</Button>
        </div>
      </form>
    </div>
  );
};

export default DhikrCreate;