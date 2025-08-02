import { WorkoutSession } from './WorkoutSession';

export interface Mesocycle {
  userId: string;
  startDate: string; // ISODate
  weeks: number;
  includesDeload: boolean;
  daysPerWeek: number;
  plannedSplit: { [day: string]: string | null };
  actualLogs: WorkoutSession[];
}
