import { Settings } from '../models/Settings';

let settingsList: Settings[] = [];

export const getSettings = (userId: string): Settings | undefined => settingsList.find(s => s.userId === userId);

export const updateSettings = (userId: string, data: Partial<Settings>): Settings | undefined => {
  const idx = settingsList.findIndex(s => s.userId === userId);
  if (idx === -1) return undefined;
  settingsList[idx] = { ...settingsList[idx], ...data };
  return settingsList[idx];
};
