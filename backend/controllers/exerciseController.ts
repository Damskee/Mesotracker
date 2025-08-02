import { Request, Response } from 'express';
import * as exerciseService from '../services/exerciseService';

export const getAllExercises = (req: Request, res: Response) => {
  res.json(exerciseService.getAllExercises());
};

export const getExerciseById = (req: Request, res: Response) => {
  const exercise = exerciseService.getExerciseById(req.params.id);
  if (exercise) res.json(exercise);
  else res.status(404).json({ error: 'Exercise not found' });
};

export const createExercise = (req: Request, res: Response) => {
  const exercise = exerciseService.createExercise(req.body);
  res.status(201).json(exercise);
};

export const updateExercise = (req: Request, res: Response) => {
  const exercise = exerciseService.updateExercise(req.params.id, req.body);
  if (exercise) res.json(exercise);
  else res.status(404).json({ error: 'Exercise not found' });
};

export const deleteExercise = (req: Request, res: Response) => {
  const success = exerciseService.deleteExercise(req.params.id);
  if (success) res.status(204).send();
  else res.status(404).json({ error: 'Exercise not found' });
};
