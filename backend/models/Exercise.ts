export interface Exercise {
  id: string;
  name: string;
  type:
    | 'barbell'
    | 'dumbbell'
    | 'machine'
    | 'smith machine'
    | 'cable'
    | 'bodyweight'
    | 'bodyweight loadable'
    | 'machine assisted';
  muscleGroups: string[];
  loadType: 'kg' | 'lbs' | 'bodyweight';
  userCreated: boolean;
  instructions?: string;
}
