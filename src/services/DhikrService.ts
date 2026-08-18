import { db } from '@/database';
import { DhikrEntry } from '@/database/schema';

export class DhikrService {
  async createDhikr(entry: Omit<DhikrEntry, 'id'>) {
    return db.dhikr.add(entry);
  }

  async getDhikrById(id: string) {
    return db.dhikr.get(id);
  }

  async getAllDhikr() {
    return db.dhikr.toArray();
  }

  async updateDhikr(id: string, updates: Partial<DhikrEntry>) {
    return db.dhikr.update(id, updates);
  }

  async deleteDhikr(id: string) {
    return db.dhikr.delete(id);
  }
}