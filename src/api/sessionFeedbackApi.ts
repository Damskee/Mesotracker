import axios from 'axios';
import type { SessionFeedback } from '../types/sessionFeedback';

const API_URL = '/api/feedback';

export const fetchFeedback = async (): Promise<SessionFeedback[]> => {
  const { data } = await axios.get(API_URL);
  return data;
};

export const createFeedback = async (feedback: Partial<SessionFeedback>): Promise<SessionFeedback> => {
  const { data } = await axios.post(API_URL, feedback);
  return data;
};

export const updateFeedback = async (id: string, feedback: Partial<SessionFeedback>): Promise<SessionFeedback> => {
  const { data } = await axios.put(`${API_URL}/${id}`, feedback);
  return data;
};

export const deleteFeedback = async (id: string): Promise<void> => {
  await axios.delete(`${API_URL}/${id}`);
};
