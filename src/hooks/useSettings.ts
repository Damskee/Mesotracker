import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import * as settingsApi from '../api/settingsApi';
import type { Settings } from '../types/settings';

export function useSettings(userId: string) {
  return useQuery<Settings, Error>({
    queryKey: ['settings', userId],
    queryFn: () => settingsApi.fetchSettings(userId),
    enabled: !!userId,
  });
}

export function useUpdateSettings(userId: string) {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: Partial<Settings>) => settingsApi.updateSettings(userId, data),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['settings', userId] }),
  });
}
