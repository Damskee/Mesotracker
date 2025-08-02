import axios from 'axios';
import type { Settings } from '../types/settings';

const API_URL = '/api/settings';

export const fetchSettings = async (userId: string): Promise<Settings> => {
  const { data } = await axios.get(`${API_URL}/${userId}`);
  return data;
};

export const updateSettings = async (userId: string, settings: Partial<Settings>): Promise<Settings> => {
  const { data } = await axios.put(`${API_URL}/${userId}`, settings);
  return data;
};
