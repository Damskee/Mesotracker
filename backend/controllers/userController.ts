import { Request, Response } from 'express';
import * as userService from '../services/userService';

export const getAllUsers = (req: Request, res: Response) => {
  res.json(userService.getAllUsers());
};

export const getUserById = (req: Request, res: Response) => {
  const user = userService.getUserById(req.params.id);
  if (user) res.json(user);
  else res.status(404).json({ error: 'User not found' });
};

export const createUser = (req: Request, res: Response) => {
  const user = userService.createUser(req.body);
  res.status(201).json(user);
};

export const updateUser = (req: Request, res: Response) => {
  const user = userService.updateUser(req.params.id, req.body);
  if (user) res.json(user);
  else res.status(404).json({ error: 'User not found' });
};

export const deleteUser = (req: Request, res: Response) => {
  const success = userService.deleteUser(req.params.id);
  if (success) res.status(204).send();
  else res.status(404).json({ error: 'User not found' });
};
