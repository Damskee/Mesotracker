

import { useState } from 'react';
import { useExercises, useCreateExercise, useUpdateExercise, useDeleteExercise } from '../hooks/useExercises';
import ExerciseTable from '../components/ExerciseTable';
import type { FC } from 'react';
import type { Exercise } from '../types/exercise';

const initialForm: Partial<Exercise> = { name: '', type: 'barbell', muscleGroups: [], loadType: 'kg', userCreated: true };

const ExerciseLibrary: FC = () => {
  const { data, isLoading, isError, error } = useExercises();
  const createMutation = useCreateExercise();
  const updateMutation = useUpdateExercise();
  const deleteMutation = useDeleteExercise();
  const [form, setForm] = useState<Partial<Exercise>>(initialForm);
  const [editing, setEditing] = useState<Exercise | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (editing && editing.id) {
      updateMutation.mutate({ id: editing.id, ...form });
      setEditing(null);
    } else {
      createMutation.mutate(form);
    }
    setForm(initialForm);
  };

  const handleEdit = (ex: Exercise) => {
    setEditing(ex);
    setForm(ex);
  };

  const handleDelete = (id: string) => {
    if (window.confirm('Delete this exercise?')) deleteMutation.mutate(id);
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Exercise Library</h1>
      {isLoading && <div>Loading...</div>}
      {isError && <div className="text-red-600">{error?.message || 'Failed to load exercises.'}</div>}
      <form className="mb-4 flex flex-wrap gap-2 items-end" onSubmit={handleSubmit}>
        <input name="name" value={form.name || ''} onChange={handleChange} placeholder="Name" className="border px-2 py-1" required />
        <select name="type" value={form.type || 'barbell'} onChange={handleChange} className="border px-2 py-1">
          <option value="barbell">Barbell</option>
          <option value="dumbbell">Dumbbell</option>
          <option value="machine">Machine</option>
          <option value="smith machine">Smith Machine</option>
          <option value="cable">Cable</option>
          <option value="bodyweight">Bodyweight</option>
          <option value="bodyweight loadable">Bodyweight Loadable</option>
          <option value="machine assisted">Machine Assisted</option>
        </select>
        <input name="muscleGroups" value={form.muscleGroups?.join(',') || ''} onChange={e => setForm(f => ({ ...f, muscleGroups: e.target.value.split(',').map(s => s.trim()) }))} placeholder="Muscle Groups (comma separated)" className="border px-2 py-1" />
        <select name="loadType" value={form.loadType || 'kg'} onChange={handleChange} className="border px-2 py-1">
          <option value="kg">kg</option>
          <option value="lbs">lbs</option>
          <option value="bodyweight">bodyweight</option>
        </select>
        <button type="submit" className="bg-blue-600 text-white px-3 py-1 rounded">
          {editing ? 'Update' : 'Add'}
        </button>
        {editing && <button type="button" className="ml-2 px-3 py-1" onClick={() => { setEditing(null); setForm(initialForm); }}>Cancel</button>}
      </form>
      {data && <ExerciseTable exercises={data} onEdit={handleEdit} onDelete={handleDelete} />}
    </div>
  );
};

export default ExerciseLibrary;
