export interface SetEntry {
  weight: number;
  reps: number;
  rir: number;
  pump: number; // 1–5
  perceivedEffort: number; // 1–10
  jointPain: boolean;
  jointPainSeverity?: number;
  recoveryRating: number; // 1–5
}

export interface ExerciseSession {
  exerciseId: string;
  sets: SetEntry[];
}

export interface WorkoutSession {
  userId: string;
  date: string; // ISODate
  workoutName: string;
  exercises: ExerciseSession[];
  sessionNotes?: string;
}
