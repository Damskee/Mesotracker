import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import * as sessionFeedbackApi from '../api/sessionFeedbackApi';
import type { SessionFeedback } from '../types/sessionFeedback';

export function useSessionFeedback() {
  return useQuery<SessionFeedback[], Error>({
    queryKey: ['sessionFeedback'],
    queryFn: sessionFeedbackApi.fetchFeedback,
  });
}

export function useCreateFeedback() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: sessionFeedbackApi.createFeedback,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['sessionFeedback'] }),
  });
}

export function useUpdateFeedback() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ id, ...data }: { id: string; [key: string]: any }) => sessionFeedbackApi.updateFeedback(id, data),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['sessionFeedback'] }),
  });
}

export function useDeleteFeedback() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (id: string) => sessionFeedbackApi.deleteFeedback(id),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['sessionFeedback'] }),
  });
}
