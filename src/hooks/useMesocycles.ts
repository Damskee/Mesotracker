import { useQuery, useMutation, useQueryClient } from 'react-query';
import * as mesocycleApi from '../api/mesocycleApi';

export const useMesocycles = () => {
  return useQuery(['mesocycles'], mesocycleApi.fetchMesocycles);
};

export const useCreateMesocycle = () => {
  const queryClient = useQueryClient();
  return useMutation(mesocycleApi.createMesocycle, {
    onSuccess: () => {
      queryClient.invalidateQueries(['mesocycles']);
    },
  });
};

export const useUpdateMesocycle = () => {
  const queryClient = useQueryClient();
  return useMutation(({ id, ...mesocycle }: any) => mesocycleApi.updateMesocycle(id, mesocycle), {
    onSuccess: () => {
      queryClient.invalidateQueries(['mesocycles']);
    },
  });
};

export const useMesocycleById = (id: string) => {
  return useQuery(['mesocycle', id], () => mesocycleApi.fetchMesocycleById(id), {
    enabled: !!id,
  });
};
