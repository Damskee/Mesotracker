import { SessionFeedback } from '../models/SessionFeedback';

let feedbacks: SessionFeedback[] = [];

export const getAllFeedback = (): SessionFeedback[] => feedbacks;

export const getFeedbackById = (id: string): SessionFeedback | undefined => feedbacks.find(f => f.id === id);

export const createFeedback = (data: SessionFeedback): SessionFeedback => {
  feedbacks.push(data);
  return data;
};

export const updateFeedback = (id: string, data: Partial<SessionFeedback>): SessionFeedback | undefined => {
  const idx = feedbacks.findIndex(f => f.id === id);
  if (idx === -1) return undefined;
  feedbacks[idx] = { ...feedbacks[idx], ...data };
  return feedbacks[idx];
};

export const deleteFeedback = (id: string): boolean => {
  const idx = feedbacks.findIndex(f => f.id === id);
  if (idx === -1) return false;
  feedbacks.splice(idx, 1);
  return true;
};
