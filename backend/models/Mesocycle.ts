import { WorkoutSession } from './WorkoutSession';

export interface Mesocycle {
  id: string;
  userId: string; // For future multi-user support
  name: string;
  description?: string;
  startDate: string; // ISODate
  weeks: number;
  includesDeload: boolean;
  daysPerWeek: number;
  plannedSplit: { [day: string]: string | null };
  phases?: string[];
  actualLogs: string[]; // WorkoutSession IDs
}
