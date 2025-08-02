

import { useExercises } from '../hooks/useExercises';
import type { FC } from 'react';




import { useUsers } from '../hooks/useUsers';
import PageLayout from '../components/PageLayout';
import CardContainer from '../components/CardContainer';
import ErrorMessage from '../components/ErrorMessage';
import EmptyState from '../components/EmptyState';

const Dashboard: FC = () => {
  const { data: users, isLoading: usersLoading, isError: usersError } = useUsers();
  const { data: exercises, isLoading: exLoading, isError: exError } = useExercises();

  return (
    <PageLayout title="Dashboard">
      <CardContainer>
        <h2 className="font-semibold mb-2">Users</h2>
        {usersLoading && <div>Loading users...</div>}
        {usersError && <ErrorMessage message="Failed to load users." />}
        {users && users.length > 0 ? (
          <ul className="list-disc ml-6">
            {users.map(u => (
              <li key={u.id}>{u.name} ({u.unitPreference}, {u.goal})</li>
            ))}
          </ul>
        ) : !usersLoading && !usersError ? (
          <EmptyState title="No Users" description="No users found." />
        ) : null}
      </CardContainer>
      <CardContainer>
        <h2 className="font-semibold mb-2">Exercises</h2>
        {exLoading && <div>Loading exercises...</div>}
        {exError && <ErrorMessage message="Failed to load exercises." />}
        {exercises && exercises.length > 0 ? (
          <ul className="list-disc ml-6">
            {exercises.map(ex => (
              <li key={ex.id}>{ex.name} ({ex.type}, {ex.muscleGroups.join(', ')})</li>
            ))}
          </ul>
        ) : !exLoading && !exError ? (
          <EmptyState title="No Exercises" description="No exercises found." />
        ) : null}
      </CardContainer>
    </PageLayout>
  );
};

export default Dashboard;
