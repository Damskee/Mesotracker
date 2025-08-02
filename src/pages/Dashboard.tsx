


import React, { useState } from 'react';
import { useExercises } from '../hooks/useExercises';
import PageLayout from '../components/PageLayout';
import CardContainer from '../components/CardContainer';
import ErrorMessage from '../components/ErrorMessage';
import EmptyState from '../components/EmptyState';
import TopNavBar from '../components/TopNavBar';
import DrawerNav from '../components/DrawerNav';
import { ErrorBoundary } from '../components/ErrorBoundary';

// Example: Each exercise has sets: [{ weight, reps, completed }]
const Dashboard: React.FC = () => {
  const { data: exercises, isLoading: exLoading, isError: exError, error: exErrorObj } = useExercises();
  const [drawerOpen, setDrawerOpen] = useState(false);
  // Local state for sets per exercise (simulate workout session)
  const [exerciseSets, setExerciseSets] = useState<{ [exerciseId: string]: { weight: string; reps: string; completed: boolean }[] }>({});

  // Add a new set row for an exercise
  const handleAddSet = (exerciseId: string) => {
    setExerciseSets(prev => ({
      ...prev,
      [exerciseId]: [
        ...(prev[exerciseId] || []),
        { weight: '', reps: '', completed: false },
      ],
    }));
  };

  // Update a set's field
  const handleSetChange = (exerciseId: string, setIdx: number, field: 'weight' | 'reps', value: string) => {
    setExerciseSets(prev => ({
      ...prev,
      [exerciseId]: prev[exerciseId].map((set, idx) => idx === setIdx ? { ...set, [field]: value } : set),
    }));
  };

  // Toggle completion
  const handleToggleComplete = (exerciseId: string, setIdx: number) => {
    setExerciseSets(prev => ({
      ...prev,
      [exerciseId]: prev[exerciseId].map((set, idx) => idx === setIdx ? { ...set, completed: !set.completed } : set),
    }));
  };

  // Responsive, mobile-first layout
  return (
    <ErrorBoundary>
      <TopNavBar onMenuClick={() => setDrawerOpen(true)} />
      <DrawerNav open={drawerOpen} onClose={() => setDrawerOpen(false)} />
      <PageLayout title="Today's Workout">
        {/* Optional: Workout-level metadata could go here */}
        {exLoading && <div className="p-4">Loading exercises...</div>}
        {exError && <ErrorMessage message={exErrorObj?.message || 'Failed to load exercises.'} />}
        {!exLoading && !exError && (!exercises || exercises.length === 0) && (
          <EmptyState title="No Exercises" description="No exercises loaded for today." />
        )}
        <div className="flex flex-col gap-4 pb-24">
          {exercises && exercises.map(ex => (
            <CardContainer key={ex.id} className="p-4">
              {/* Exercise header */}
              <div className="flex items-center gap-2 mb-2">
                <span className="font-bold text-lg flex-1">{ex.name}</span>
                {/* Optional tags */}
                {ex.muscleGroups && ex.muscleGroups.length > 0 && (
                  <span className="bg-gray-100 text-xs rounded px-2 py-0.5 mr-1">{ex.muscleGroups.join(', ')}</span>
                )}
                {/* Equipment tag removed: property does not exist on Exercise */}
              </div>
              {/* Sets table */}
              <div className="flex flex-col gap-2">
                {(exerciseSets[ex.id] || []).map((set, idx) => (
                  <div key={idx} className="flex items-center gap-2 bg-gray-50 rounded px-2 py-2">
                    <input
                      type="number"
                      inputMode="decimal"
                      pattern="[0-9]*"
                      className="border rounded px-2 py-1 w-20 text-right text-base"
                      placeholder="Weight"
                      value={set.weight}
                      onChange={e => handleSetChange(ex.id, idx, 'weight', e.target.value)}
                    />
                    <span className="text-xs text-gray-500">kg/lb</span>
                    <input
                      type="number"
                      inputMode="numeric"
                      pattern="[0-9]*"
                      className="border rounded px-2 py-1 w-16 text-right text-base"
                      placeholder="Reps"
                      value={set.reps}
                      onChange={e => handleSetChange(ex.id, idx, 'reps', e.target.value)}
                    />
                    <span className="text-xs text-gray-500">reps</span>
                    <button
                      type="button"
                      aria-label="Toggle complete"
                      className={`ml-2 w-8 h-8 flex items-center justify-center rounded-full border-2 ${set.completed ? 'bg-green-500 border-green-600' : 'bg-white border-gray-300'} transition`}
                      onClick={() => handleToggleComplete(ex.id, idx)}
                    >
                      {set.completed ? (
                        <span className="text-white font-bold">✓</span>
                      ) : (
                        <span className="text-gray-400">○</span>
                      )}
                    </button>
                  </div>
                ))}
                <button
                  type="button"
                  className="mt-2 w-full bg-blue-100 text-blue-700 rounded py-2 font-semibold hover:bg-blue-200 transition"
                  onClick={() => handleAddSet(ex.id)}
                >
                  + Add Set
                </button>
              </div>
            </CardContainer>
          ))}
        </div>
        {/* Fixed bottom action bar */}
        <div className="fixed bottom-0 left-0 w-full bg-white border-t shadow-lg p-4 flex justify-center z-50">
          <button
            type="button"
            className="bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-bold shadow-md w-full max-w-md"
          >
            Finish Workout
          </button>
        </div>
      </PageLayout>
    </ErrorBoundary>
  );
};

export default Dashboard;
