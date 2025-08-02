import { User } from '../models/User';

let users: User[] = [];

export const getAllUsers = (): User[] => users;

export const getUserById = (id: string): User | undefined => users.find(u => u.id === id);

export const createUser = (data: User): User => {
  users.push(data);
  return data;
};

export const updateUser = (id: string, data: Partial<User>): User | undefined => {
  const idx = users.findIndex(u => u.id === id);
  if (idx === -1) return undefined;
  users[idx] = { ...users[idx], ...data };
  return users[idx];
};

export const deleteUser = (id: string): boolean => {
  const idx = users.findIndex(u => u.id === id);
  if (idx === -1) return false;
  users.splice(idx, 1);
  return true;
};
