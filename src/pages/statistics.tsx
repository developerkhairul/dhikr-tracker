"use client";

import React from 'react';
import { Card } from '@/components/ui/card';
import { CounterDisplay } from '@/components/ui/counter-display';
import { Badge } from '@/components/ui/badge';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Statistics = () => {
  // Mock data for demonstration
  const dailyData = [
    { name: 'Mon', dhikr: 120, dua: 30, surah: 10 },
    { name: 'Tue', dhikr: 135, dua: 35, surah: 12 },
    { name: 'Wed', dhikr: 110, dua: 28, surah: 8 },
    { name: 'Thu', dhikr: 140, dua: 32, surah: 11 },
    { name: 'Fri', dhikr: 155, dua: 40, surah: 13 },
    { name: 'Sat', dhikr: 100, dua: 25, surah: 9 },
    { name: 'Sun', dhikr: 115, dua: 33, surah: 10 },
  ];

  const monthlyData = [
    { name: 'Jan', dhikr: 800, dua: 200, surah: 60 },
    { name: 'Feb', dhikr: 850, dua: 220, surah: 65 },
    { name: 'Mar', dhikr: 900, dua: 240, surah: 70 },
    { name: 'Apr', dhikr: 950, dua: 250, surah: 75 },
    { name: 'May', dhikr: 1000, dua: 260, surah: 80 },
    { name: 'Jun', dhikr: 1050, dua: 270, surah: 85 },
  ];

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-text-primary">Statistics</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <Card className="p-6">
          <h2 className="text-lg font-semibold mb-4">Today's Totals</h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm text-text-secondary">Dhikr</span>
              <CounterDisplay value={142} variant="accent" />
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-text-secondary">Dua</span>
              <CounterDisplay value={34} variant="success" />
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-text-secondary">Surah</span>
              <CounterDisplay value={12} variant="warning" />
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <h2 className="text-lg font-semibold mb-4">Weekly Average</h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm text-text-secondary">Dhikr/Day</span>
              <CounterDisplay value={125} variant="accent" />
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-text-secondary">Dua/Day</span>
              <CounterDisplay value={31} variant="success" />
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-text-secondary">Surah/Day</span>
              <CounterDisplay value={10} variant="warning" />
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <h2 className="text-lg font-semibold mb-4">Monthly Trend</h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm text-text-secondary">Best Day</span>
              <span className="font-medium text-accent">Friday (155 Dhikr)</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-text-secondary">Consistency</span>
              <Badge variant="primary">85%</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-text-secondary">Goal Progress</span>
              <CounterDisplay value={68} variant="success" />
            </div>
          </div>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="p-6">
          <h2 className="text-lg font-semibold mb-4">Daily Activity (Last 7 Days)</h2>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={dailyData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="dhikr" stroke="#10B981" strokeWidth={2} />
              <Line type="monotone" dataKey="dua" stroke="#6366F1" strokeWidth={2} />
              <Line type="monotone" dataKey="surah" stroke="#F59E0B" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </Card>

        <Card className="p-6">
          <h2 className="text-lg font-semibold mb-4">Monthly Activity (Last 6 Months)</h2>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={monthlyData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="dhikr" stroke="#10B981" strokeWidth={2} />
              <Line type="monotone" dataKey="dua" stroke="#6366F1" strokeWidth={2} />
              <Line type="monotone" dataKey="surah" stroke="#F59E0B" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </Card>
      </div>
    </div>
  );
};

export default Statistics;