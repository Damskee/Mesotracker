import { WorkoutSession } from './WorkoutSession';

export interface Mesocycle {
  id: string;
  userId: string;
  startDate: string; // ISODate
  weeks: number;
  includesDeload: boolean;
  daysPerWeek: number;
  plannedSplit: { [day: string]: string | null };
  actualLogs: string[]; // WorkoutSession IDs
}
