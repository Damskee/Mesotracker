export interface User {
  id: string;
  name: string;
  unitPreference: 'kg' | 'lbs';
  goal: 'hypertrophy' | 'strength';
  priorityMuscles: string[];
  wellnessLog: Array<{
    date: string;
    sleepHours: number;
    mood: string;
    stress: string;
    appetite: string;
  }>;
}
