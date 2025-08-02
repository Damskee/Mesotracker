export interface SessionFeedback {
  id: string;
  userId: string;
  sessionDate: string;
  exerciseId: string;
  pump: number;
  perceivedEffort: number;
  jointPain: number;
  recoveryRating: number;
  notes?: string;
}
