"use client";

import React from 'react';
import { Card } from '@/components/ui/card';
import { Calendar, Today } from 'lucide-react';
import { useState } from 'react';

interface CalendarEvent {
  id: number;
  title: string;
  date: string;
}

export const CalendarPage = () => {
  const [events, setEvents] = useState<CalendarEvent[]>([]);
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleDateSelect = (date: Date) => {
    setSelectedDate(date);
    // Add mock event
    const newEvent = {
      id: events.length + 1,
      title: `Dhikr Session on ${date.toLocaleDateString()}`,
      date: date.toISOString()
    };
    setEvents([...events, newEvent]);
  };

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-text-primary">Calendar</h1>

      <Card className="p-6">
        <div className="flex justify-between items-center">
          <span className="text-lg">Navigate Month</span>
          <Calendar onClick={handleDateSelect} />
        </div>

        <div className="mt-4">
          <h2 className="text-lg font-semibold mb-2">Today's Sessions</h2>
          {events.length > 0 ? (
            <div className="space-y-2">
              {events.map((event) => (
                <Card
                  key={event.id} className="p-4 rounded-md bg-surface dark:bg-surface-dark border border-border dark:border-border-dark"
                >
                  <span className="text-sm text-text-secondary">{new Date(event.date).toLocaleDateString()}</span>
                  <span className="text-semibold text-accent">{event.title}</span>
                </Card>
              ))}
            </div>
          ) : (
            <p className="text-text-secondary">{'No sessions scheduled today'}</p>
          )}
        </div>
      </Card>
    </div>
  );
};

export default CalendarPage;