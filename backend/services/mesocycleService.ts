import { Mesocycle } from '../models/Mesocycle';

let mesocycles: Mesocycle[] = [];

// For future: filter by userId (uncomment to enable user scoping)
// export const getAllMesocycles = (userId: string): Mesocycle[] => mesocycles.filter(m => m.userId === userId);
export const getAllMesocycles = (): Mesocycle[] => mesocycles;

export const getMesocycleById = (id: string): Mesocycle | undefined => mesocycles.find(m => m.id === id);

export const createMesocycle = (data: Mesocycle): Mesocycle => {
  mesocycles.push(data);
  return data;
};

export const updateMesocycle = (id: string, data: Partial<Mesocycle>): Mesocycle | undefined => {
  const idx = mesocycles.findIndex(m => m.id === id);
  if (idx === -1) return undefined;
  mesocycles[idx] = { ...mesocycles[idx], ...data };
  return mesocycles[idx];
};

export const deleteMesocycle = (id: string): boolean => {
  const idx = mesocycles.findIndex(m => m.id === id);
  if (idx === -1) return false;
  mesocycles.splice(idx, 1);
  return true;
};
