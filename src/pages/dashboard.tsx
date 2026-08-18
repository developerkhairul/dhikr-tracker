"use client";

import React from 'react';
import { Card } from '@/components/ui/card';
import CounterDisplay from '@/components/ui/counter-display';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Plus, Calendar, BarChart3, History, Target } from 'lucide-react';

const Dashboard = () => {
  return (
    <div className="space-y-6">
      {/* Today's Summary */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-text-secondary">Today's Dhikr</p>
              <CounterDisplay value={142} size="lg" variant="accent" />
            </div>
            <div className="p-3 rounded-lg bg-accent/10">
              <span className="text-2xl">🔢</span>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-text-secondary">Today's Dua</p>
              <CounterDisplay value={34} size="lg" variant="success" />
            </div>
            <div className="p-3 rounded-lg bg-green-100 dark:bg-green-900/30">
              <span className="text-2xl">🤲</span>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-text-secondary">Today's Surah</p>
              <CounterDisplay value={12} size="lg" variant="warning" />
            </div>
            <div className="p-3 rounded-lg bg-yellow-100 dark:bg-yellow-900/30">
              <span className="text-2xl">📖</span>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-text-secondary">Lifetime Total</p>
              <CounterDisplay value={8432} size="lg" />
            </div>
            <div className="p-3 rounded-lg bg-blue-100 dark:bg-blue-900/30">
              <span className="text-2xl">🏆</span>
            </div>
          </div>
        </Card>
      </section>

      {/* Quick Actions */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="p-6">
          <h3 className="text-lg font-semibold mb-4">Quick Actions</h3>
          <div className="space-y-2">
            <Button className="w-full justify-start gap-3" leftIcon={<Plus className="h-4 w-4" />}>
              New Dhikr
            </Button>
            <Button variant="outline" className="w-full justify-start gap-3" leftIcon={<Calendar className="h-4 w-4" />}>
              View Calendar
            </Button>
            <Button variant="secondary" className="w-full justify-start gap-3" leftIcon={<BarChart3 className="h-4 w-4" />}>
              View Statistics
            </Button>
            <Button variant="ghost" className="w-full justify-start gap-3" leftIcon={<History className="h-4 w-4" />}>
              Session History
            </Button>
            <Button variant="accent_alt" className="w-full justify-start gap-3" leftIcon={<Target className="h-4 w-4" />}>
              Set Goals
            </Button>
          </div>
        </Card>

        <Card className="p-6 md:col-span-2">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold">Recent Dhikr</h3>
            <Badge variant="primary">3 Active</Badge>
          </div>
          <div className="space-y-3">
            {[
              { name: 'SubhanAllah', count: 33, type: 'Dhikr' },
              { name: 'Alhamdulillah', count: 33, type: 'Dhikr' },
              { name: 'Allahu Akbar', count: 34, type: 'Dhikr' },
            ].map((dhikr, i) => (
              <Card key={i} className="p-4" variant="default">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-accent/10">
                      <span className="text-lg">🔢</span>
                    </div>
                    <div>
                      <p className="font-medium">{dhikr.name}</p>
                      <p className="text-sm text-text-secondary">{dhikr.type} • {dhikr.count} recitations</p>
                    </div>
                  </div>
                  <Button size="sm" variant="outline">Continue</Button>
                </div>
              </Card>
            ))}
          </div>
        </Card>
      </section>

      {/* Goals Progress */}
      <section>
        <Card className="p-6">
          <h3 className="text-lg font-semibold mb-4">Daily Goal Progress</h3>
          <div className="space-y-4">
            {[
              { name: 'Morning Adhkar', current: 15, target: 20 },
              { name: 'Evening Adhkar', current: 8, target: 15 },
              { name: 'Quran Reading', current: 3, target: 5 },
            ].map((goal, i) => (
              <div key={i}>
                <div className="flex justify-between text-sm mb-1">
                  <span className="font-medium">{goal.name}</span>
                  <span className="text-text-secondary">{goal.current}/{goal.target}</span>
                </div>
                <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-accent rounded-full transition-all duration-300"
                    style={{ width: `${(goal.current / goal.target) * 100}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </Card>
      </section>
    </div>
  );
};

export default Dashboard;