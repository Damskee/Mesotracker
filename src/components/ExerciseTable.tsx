import type { FC } from 'react';
import type { Exercise } from '../types/exercise';

interface Props {
  exercises: Exercise[];
  onEdit: (exercise: Exercise) => void;
  onDelete: (id: string) => void;
}

const ExerciseTable: FC<Props> = ({ exercises, onEdit, onDelete }) => (
  <table className="min-w-full border text-sm">
    <thead>
      <tr className="bg-gray-100">
        <th className="border px-2 py-1">Name</th>
        <th className="border px-2 py-1">Type</th>
        <th className="border px-2 py-1">Muscle Groups</th>
        <th className="border px-2 py-1">Load Type</th>
        <th className="border px-2 py-1">User Created</th>
        <th className="border px-2 py-1">Actions</th>
      </tr>
    </thead>
    <tbody>
      {exercises.map(ex => (
        <tr key={ex.id}>
          <td className="border px-2 py-1">{ex.name}</td>
          <td className="border px-2 py-1">{ex.type}</td>
          <td className="border px-2 py-1">{ex.muscleGroups.join(', ')}</td>
          <td className="border px-2 py-1">{ex.loadType}</td>
          <td className="border px-2 py-1">{ex.userCreated ? 'Yes' : 'No'}</td>
          <td className="border px-2 py-1">
            <button className="text-blue-600 mr-2" onClick={() => onEdit(ex)}>Edit</button>
            <button className="text-red-600" onClick={() => onDelete(ex.id)}>Delete</button>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
);

export default ExerciseTable;
