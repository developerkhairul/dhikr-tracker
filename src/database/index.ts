import Dexie, { Table } from 'dexie';

// Schema
export interface DhikrEntry {
  id: string;
  name: string;
  type: 'Dhikr' | 'Dua' | 'Surah';
  goal?: number;
  count: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface CounterSession {
  id: string;
  dhikrId: string;
  startTime: Date;
  endTime?: Date;
  count: number;
  completed: boolean;
}

export interface UserSettings {
  key: string;
  value: string | number | boolean;
}

// Database instance
class DhikrDB extends Dexie {
  dhikr!: Table<DhikrEntry, string>;
  sessions!: Table<CounterSession, string>;
  settings!: Table<UserSettings, string>;

  constructor() {
    super('DhikrTrackerDB');
    this.version(1).stores({
      dhikr: '++id, name, type, createdAt, updatedAt',
      sessions: '++id, dhikrId, startTime, endTime, completed',
      settings: 'key',
    });
  }
}

export const db = new DhikrDB();