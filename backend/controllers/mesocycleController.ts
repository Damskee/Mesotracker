import { Request, Response } from 'express';
import * as mesocycleService from '../services/mesocycleService';

export const getAllMesocycles = (req: Request, res: Response) => {
  res.json(mesocycleService.getAllMesocycles());
};

export const getMesocycleById = (req: Request, res: Response) => {
  const meso = mesocycleService.getMesocycleById(req.params.id);
  if (meso) res.json(meso);
  else res.status(404).json({ error: 'Mesocycle not found' });
};

export const createMesocycle = (req: Request, res: Response) => {
  const meso = mesocycleService.createMesocycle(req.body);
  res.status(201).json(meso);
};

export const updateMesocycle = (req: Request, res: Response) => {
  const meso = mesocycleService.updateMesocycle(req.params.id, req.body);
  if (meso) res.json(meso);
  else res.status(404).json({ error: 'Mesocycle not found' });
};

export const deleteMesocycle = (req: Request, res: Response) => {
  const success = mesocycleService.deleteMesocycle(req.params.id);
  if (success) res.status(204).send();
  else res.status(404).json({ error: 'Mesocycle not found' });
};
