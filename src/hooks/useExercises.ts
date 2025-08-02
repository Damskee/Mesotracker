import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import * as exerciseApi from '../api/exerciseApi';
import type { Exercise } from '../types/exercise';

export function useExercises() {
  return useQuery<Exercise[], Error>({
    queryKey: ['exercises'],
    queryFn: exerciseApi.fetchExercises,
  });
}

export function useCreateExercise() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: exerciseApi.createExercise,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['exercises'] }),
  });
}

export function useUpdateExercise() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ id, ...data }: { id: string; [key: string]: any }) => exerciseApi.updateExercise(id, data),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['exercises'] }),
  });
}

export function useDeleteExercise() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (id: string) => exerciseApi.deleteExercise(id),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['exercises'] }),
  });
}
