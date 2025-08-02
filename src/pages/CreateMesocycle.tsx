import React, { useState } from 'react';
import PageLayout from '../components/PageLayout';
import CardContainer from '../components/CardContainer';
import FormGroup from '../components/FormGroup';
import TopNavBar from '../components/TopNavBar';
import DrawerNav from '../components/DrawerNav';
import { ErrorBoundary } from '../components/ErrorBoundary';
import { useCreateMesocycle } from '../hooks/useMesocycles';
import { useExercises } from '../hooks/useExercises';

const MUSCLE_GROUPS = [
  'Chest', 'Back', 'Shoulders', 'Arms', 'Legs', 'Core', 'Glutes', 'Calves', 'Other'
];
const EXERCISE_TYPES = [
  'barbell', 'dumbbell', 'machine', 'smith machine', 'cable', 'bodyweight', 'bodyweight loadable', 'machine assisted'
];

const CreateMesocycle: React.FC = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const { data: exercises } = useExercises();
  const createMesocycle = useCreateMesocycle();
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [days, setDays] = useState([
    [{ muscleGroup: '', exerciseName: '', exerciseType: EXERCISE_TYPES[0] }]
  ]);

  const handleAddDay = () => {
    setDays([...days, [{ muscleGroup: '', exerciseName: '', exerciseType: EXERCISE_TYPES[0] }]]);
  };

  const handleAddExercise = (dayIdx: number) => {
    setDays(days.map((d, i) => i === dayIdx ? [...d, { muscleGroup: '', exerciseName: '', exerciseType: EXERCISE_TYPES[0] }] : d));
  };

  const handleExerciseChange = (dayIdx: number, exIdx: number, field: string, value: string) => {
    setDays(days.map((d, i) =>
      i === dayIdx
        ? d.map((ex, j) => j === exIdx ? { ...ex, [field]: value } : ex)
        : d
    ));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    createMesocycle.mutate({
      name,
      description,
      days,
      // TODO: add userId if available
    });
  };

  return (
    <ErrorBoundary>
      <TopNavBar onMenuClick={() => setDrawerOpen(true)} />
      <DrawerNav open={drawerOpen} onClose={() => setDrawerOpen(false)} />
      <PageLayout title="Create Mesocycle">
        <form onSubmit={handleSubmit} className="space-y-4">
          <CardContainer>
            <FormGroup label="Mesocycle Name">
              <input value={name} onChange={e => setName(e.target.value)} className="border px-2 py-1 rounded w-full" required />
            </FormGroup>
            <FormGroup label="Description">
              <textarea value={description} onChange={e => setDescription(e.target.value)} className="border px-2 py-1 rounded w-full" />
            </FormGroup>
          </CardContainer>
          {days.map((day, dayIdx) => (
            <CardContainer key={dayIdx}>
              <div className="font-semibold mb-2">Day {dayIdx + 1}</div>
              {day.map((ex, exIdx) => (
                <div key={exIdx} className="flex gap-2 mb-2 flex-wrap">
                  <FormGroup label="Muscle Group">
                    <select value={ex.muscleGroup} onChange={e => handleExerciseChange(dayIdx, exIdx, 'muscleGroup', e.target.value)} className="border rounded px-2 py-1">
                      <option value="">Select</option>
                      {MUSCLE_GROUPS.map(mg => <option key={mg} value={mg}>{mg}</option>)}
                    </select>
                  </FormGroup>
                  <FormGroup label="Exercise Name">
                    <select value={ex.exerciseName} onChange={e => handleExerciseChange(dayIdx, exIdx, 'exerciseName', e.target.value)} className="border rounded px-2 py-1">
                      <option value="">Select</option>
                      {exercises && exercises.map((exOpt: any) => <option key={exOpt.id} value={exOpt.name}>{exOpt.name}</option>)}
                      <option value="__new">+ Add New</option>
                    </select>
                  </FormGroup>
                  <FormGroup label="Exercise Type">
                    <select value={ex.exerciseType} onChange={e => handleExerciseChange(dayIdx, exIdx, 'exerciseType', e.target.value)} className="border rounded px-2 py-1">
                      {EXERCISE_TYPES.map(type => <option key={type} value={type}>{type}</option>)}
                    </select>
                  </FormGroup>
                </div>
              ))}
              <button type="button" className="bg-blue-100 text-blue-700 rounded px-3 py-1 mt-2" onClick={() => handleAddExercise(dayIdx)}>
                + Add Exercise
              </button>
            </CardContainer>
          ))}
          <button type="button" className="bg-gray-200 rounded px-4 py-2 font-semibold" onClick={handleAddDay}>
            + Add Day
          </button>
          <button type="submit" className="bg-blue-600 text-white rounded px-6 py-2 font-bold">
            Save Mesocycle
          </button>
        </form>
      </PageLayout>
    </ErrorBoundary>
  );
};

export default CreateMesocycle;
