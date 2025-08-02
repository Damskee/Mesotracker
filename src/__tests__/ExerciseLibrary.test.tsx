import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import ExerciseLibrary from '../pages/ExerciseLibrary';

const queryClient = new QueryClient();

jest.mock('../hooks/useExercises', () => {
  const actual = jest.requireActual('../hooks/useExercises');
  return {
    ...actual,
    useExercises: () => ({
      data: [
        { id: '1', name: 'Squat', type: 'barbell', muscleGroups: ['quads'], loadType: 'kg', userCreated: false },
      ],
      isLoading: false,
      isError: false,
    }),
    useCreateExercise: () => ({ mutate: jest.fn() }),
    useUpdateExercise: () => ({ mutate: jest.fn() }),
    useDeleteExercise: () => ({ mutate: jest.fn() }),
  };
});

describe('ExerciseLibrary', () => {
  it('renders exercise table', () => {
    render(
      <QueryClientProvider client={queryClient}>
        <ExerciseLibrary />
      </QueryClientProvider>
    );
    expect(screen.getByText('Squat')).toBeInTheDocument();
    expect(screen.getByText('Exercise Library')).toBeInTheDocument();
  });
});
