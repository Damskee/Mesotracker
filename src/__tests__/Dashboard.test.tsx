import { render, screen } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Dashboard from '../pages/Dashboard';

const queryClient = new QueryClient();

jest.mock('../hooks/useUsers', () => ({
  useUsers: () => ({
    data: [
      { id: '1', name: 'Alice', unitPreference: 'kg', goal: 'hypertrophy', priorityMuscles: [], wellnessLog: [] },
    ],
    isLoading: false,
    isError: false,
  }),
}));

jest.mock('../hooks/useExercises', () => ({
  useExercises: () => ({
    data: [
      { id: '1', name: 'Squat', type: 'barbell', muscleGroups: ['quads'], loadType: 'kg', userCreated: false },
    ],
    isLoading: false,
    isError: false,
  }),
}));

describe('Dashboard', () => {
  it('renders users and exercises', () => {
    render(
      <QueryClientProvider client={queryClient}>
        <Dashboard />
      </QueryClientProvider>
    );
    expect(screen.getByText('Alice (kg, hypertrophy)')).toBeInTheDocument();
    expect(screen.getByText('Squat (barbell, quads)')).toBeInTheDocument();
  });
});
