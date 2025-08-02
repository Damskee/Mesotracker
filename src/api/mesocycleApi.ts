import axios from 'axios';

export const fetchMesocycles = async () => {
  const { data } = await axios.get('/api/mesocycles');
  return data;
};

export const createMesocycle = async (mesocycle: any) => {
  const { data } = await axios.post('/api/mesocycles', mesocycle);
  return data;
};

export const updateMesocycle = async (id: string, mesocycle: any) => {
  const { data } = await axios.put(`/api/mesocycles/${id}`, mesocycle);
  return data;
};

export const fetchMesocycleById = async (id: string) => {
  const { data } = await axios.get(`/api/mesocycles/${id}`);
  return data;
};
