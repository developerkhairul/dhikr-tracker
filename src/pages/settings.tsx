"use client";

import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Switch } from '@/components/ui/switch';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Label } from '@/components/ui/label';

const Settings = () => {
  return (
    <div className="space-y-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-2xl font-bold text-text-primary mb-6">
          Settings
        </h1>

        <Card className="p-6">
          <h2 className="text-lg font-semibold mb-4">General</h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <Label htmlFor="theme-toggle">Theme</Label>
              <div className="flex items-center space-x-2">
                <Switch id="theme-toggle" checked={false} />
                <span className="text-sm text-text-secondary">Dark Mode</span>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <Label htmlFor="sound-toggle">Sound Effects</Label>
              <Switch id="sound-toggle" checked={true} />
            </div>

            <div className="flex items-center justify-between">
              <Label htmlFor="vibration-toggle">Vibration</Label>
              <Switch id="vibration-toggle" checked={true} />
            </div>

            <div className="flex items-center justify-between">
              <Label htmlFor="backup-toggle">Auto Backup</Label>
              <Switch id="backup-toggle" checked={false} />
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <h2 className="text-lg font-semibold mb-4">Appearance</h2>
          <div className="space-y-4">
            <div>
              <Label htmlFor="accent-color">Accent Color</Label>
              <div className="flex flex-wrap gap-2">
                <button
                  id="accent-color"
                  className="h-8 w-8 rounded-full border-2 border-transparent hover:border-accent focus-visible:ring-2 focus-visible:ring-accent/50"
                  style={{ backgroundColor: '#10B981' }}
                />
                <button
                  className="h-8 w-8 rounded-full border-2 border-transparent hover:border-accent focus-visible:ring-2 focus-visible:ring-accent/50"
                  style={{ backgroundColor: '#6366F1' }}
                />
                <button
                  className="h-8 w-8 rounded-full border-2 border-transparent hover:border-accent focus-visible:ring-2 focus-visible:ring-accent/50"
                  style={{ backgroundColor: '#EF4444' }}
                />
                <button
                  className="h-8 w-8 rounded-full border-2 border-transparent hover:border-accent focus-visible:ring-2 focus-visible:ring-accent/50"
                  style={{ backgroundColor: '#F59E0B' }}
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="font-size">Font Size</Label>
              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm" onClick={() => {}}>
                  A-
                </Button>
                <Input
                  id="font-size"
                  type="number"
                  defaultValue="16"
                  className="w-20 text-center"
                  min="12"
                  max="24"
                />
                <Button variant="outline" size="sm" onClick={() => {}}>
                  A+
                </Button>
              </div>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <h2 className="text-lg font-semibold mb-4">Data Management</h2>
          <div className="space-y-4">
            <Button
              variant="outline"
              className="w-full justify-start gap-3"
              leftIcon={<Upload className="h-4 w-4" />}
            >
              Import Data
            </Button>
            <Button
              variant="outline"
              className="w-full justify-start gap-3"
              leftIcon={<Download className="h-4 w-4" />}
            >
              Export Data
            </Button>
            <Button
              variant="destructive"
              className="w-full justify-start gap-3"
              leftIcon={<Trash2 className="h-4 w-4" />}
            >
              Reset All Data
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Settings;