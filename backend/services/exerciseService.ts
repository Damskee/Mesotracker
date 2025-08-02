import { Exercise } from '../models/Exercise';

let exercises: Exercise[] = [];

export const getAllExercises = (): Exercise[] => exercises;

export const getExerciseById = (id: string): Exercise | undefined => exercises.find(e => e.id === id);

export const createExercise = (data: Exercise): Exercise => {
  exercises.push(data);
  return data;
};

export const updateExercise = (id: string, data: Partial<Exercise>): Exercise | undefined => {
  const idx = exercises.findIndex(e => e.id === id);
  if (idx === -1) return undefined;
  exercises[idx] = { ...exercises[idx], ...data };
  return exercises[idx];
};

export const deleteExercise = (id: string): boolean => {
  const idx = exercises.findIndex(e => e.id === id);
  if (idx === -1) return false;
  exercises.splice(idx, 1);
  return true;
};
