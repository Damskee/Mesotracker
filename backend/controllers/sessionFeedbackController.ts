import { Request, Response } from 'express';
import * as sessionFeedbackService from '../services/sessionFeedbackService';

export const getAllFeedback = (req: Request, res: Response) => {
  res.json(sessionFeedbackService.getAllFeedback());
};

export const getFeedbackById = (req: Request, res: Response) => {
  const feedback = sessionFeedbackService.getFeedbackById(req.params.id);
  if (feedback) res.json(feedback);
  else res.status(404).json({ error: 'Feedback not found' });
};

export const createFeedback = (req: Request, res: Response) => {
  const feedback = sessionFeedbackService.createFeedback(req.body);
  res.status(201).json(feedback);
};

export const updateFeedback = (req: Request, res: Response) => {
  const feedback = sessionFeedbackService.updateFeedback(req.params.id, req.body);
  if (feedback) res.json(feedback);
  else res.status(404).json({ error: 'Feedback not found' });
};

export const deleteFeedback = (req: Request, res: Response) => {
  const success = sessionFeedbackService.deleteFeedback(req.params.id);
  if (success) res.status(204).send();
  else res.status(404).json({ error: 'Feedback not found' });
};
