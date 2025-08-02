

import { useUsers } from '../hooks/useUsers';
import { useExercises } from '../hooks/useExercises';
import type { FC } from 'react';

const Dashboard: FC = () => {
  const { data: users, isLoading: usersLoading, isError: usersError } = useUsers();
  const { data: exercises, isLoading: exLoading, isError: exError } = useExercises();

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
      <div className="mb-4">
        <h2 className="font-semibold">Users</h2>
        {usersLoading && <div>Loading users...</div>}
        {usersError && <div className="text-red-600">Failed to load users.</div>}
        {users && (
          <ul className="list-disc ml-6">
            {users.map(u => (
              <li key={u.id}>{u.name} ({u.unitPreference}, {u.goal})</li>
            ))}
          </ul>
        )}
      </div>
      <div>
        <h2 className="font-semibold">Exercises</h2>
        {exLoading && <div>Loading exercises...</div>}
        {exError && <div className="text-red-600">Failed to load exercises.</div>}
        {exercises && (
          <ul className="list-disc ml-6">
            {exercises.map(ex => (
              <li key={ex.id}>{ex.name} ({ex.type}, {ex.muscleGroups.join(', ')})</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
