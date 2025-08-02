export interface WellnessLogEntry {
  date: string;
  sleepHours: number;
  mood: string;
  stress: string;
  appetite: string;
}

export interface User {
  id: string;
  name: string;
  unitPreference: 'kg' | 'lbs';
  goal: 'hypertrophy' | 'strength';
  priorityMuscles: string[];
  wellnessLog: WellnessLogEntry[];
}
