import axios from 'axios';
import type { User } from '../types/user';

const API_URL = '/api/users';

export const fetchUsers = async (): Promise<User[]> => {
  const { data } = await axios.get(API_URL);
  return data;
};

export const createUser = async (user: Partial<User>): Promise<User> => {
  const { data } = await axios.post(API_URL, user);
  return data;
};

export const updateUser = async (id: string, user: Partial<User>): Promise<User> => {
  const { data } = await axios.put(`${API_URL}/${id}`, user);
  return data;
};

export const deleteUser = async (id: string): Promise<void> => {
  await axios.delete(`${API_URL}/${id}`);
};
