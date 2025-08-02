import axios from 'axios';
import type { Exercise } from '../types/exercise';

const API_URL = '/api/exercises';

export const fetchExercises = async (): Promise<Exercise[]> => {
  const { data } = await axios.get(API_URL);
  return data;
};

export const createExercise = async (exercise: Partial<Exercise>): Promise<Exercise> => {
  const { data } = await axios.post(API_URL, exercise);
  return data;
};

export const updateExercise = async (id: string, exercise: Partial<Exercise>): Promise<Exercise> => {
  const { data } = await axios.put(`${API_URL}/${id}`, exercise);
  return data;
};

export const deleteExercise = async (id: string): Promise<void> => {
  await axios.delete(`${API_URL}/${id}`);
};
