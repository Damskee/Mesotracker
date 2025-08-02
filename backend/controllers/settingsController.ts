import { Request, Response } from 'express';
import * as settingsService from '../services/settingsService';

export const getSettings = (req: Request, res: Response) => {
  const settings = settingsService.getSettings(req.params.userId);
  if (settings) res.json(settings);
  else res.status(404).json({ error: 'Settings not found' });
};

export const updateSettings = (req: Request, res: Response) => {
  const settings = settingsService.updateSettings(req.params.userId, req.body);
  if (settings) res.json(settings);
  else res.status(404).json({ error: 'Settings not found' });
};
