
import React, { useState } from 'react';
import { useSessionFeedback, useCreateFeedback, useUpdateFeedback, useDeleteFeedback } from '../hooks/useSessionFeedback';
import type { SessionFeedback } from '../types/sessionFeedback';
import PageLayout from '../components/PageLayout';
import CardContainer from '../components/CardContainer';
import ErrorMessage from '../components/ErrorMessage';
import EmptyState from '../components/EmptyState';
import TopNavBar from '../components/TopNavBar';
import DrawerNav from '../components/DrawerNav';
import { ErrorBoundary } from '../components/ErrorBoundary';

const initialForm: Partial<SessionFeedback> = {
  userId: '',
  sessionDate: '',
  exerciseId: '',
  pump: 0,
  perceivedEffort: 0,
  jointPain: 0,
  recoveryRating: 0,
  notes: '',
};

const SessionFeedback: React.FC = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const { data, isLoading, isError, error } = useSessionFeedback();
  const createMutation = useCreateFeedback();
  const updateMutation = useUpdateFeedback();
  const deleteMutation = useDeleteFeedback();
  const [form, setForm] = useState<Partial<SessionFeedback>>(initialForm);
  const [editing, setEditing] = useState<SessionFeedback | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((f: Partial<SessionFeedback>) => ({ ...f, [e.target.name]: e.target.value }));
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

  const handleEdit = (fb: SessionFeedback) => {
    setEditing(fb);
    setForm(fb);
  };

  const handleDelete = (id: string) => {
    if (window.confirm('Delete this feedback?')) deleteMutation.mutate(id);
  };

  return (
    <ErrorBoundary>
      <TopNavBar onMenuClick={() => setDrawerOpen(true)} />
      <DrawerNav open={drawerOpen} onClose={() => setDrawerOpen(false)} />
      <PageLayout title="Session Feedback">
        <CardContainer>
          {isLoading && <div>Loading...</div>}
          {isError && <ErrorMessage message={error?.message || 'Failed to load feedback.'} />}
          <form className="mb-4 flex flex-wrap gap-2 items-end" onSubmit={handleSubmit}>
            <input name="userId" value={form.userId || ''} onChange={handleChange} placeholder="User ID" className="border px-2 py-1" required />
            <input name="sessionDate" value={form.sessionDate || ''} onChange={handleChange} placeholder="Date (YYYY-MM-DD)" className="border px-2 py-1" required />
            <input name="exerciseId" value={form.exerciseId || ''} onChange={handleChange} placeholder="Exercise ID" className="border px-2 py-1" required />
            <input name="pump" type="number" value={form.pump ?? 0} onChange={handleChange} placeholder="Pump" className="border px-2 py-1 w-20" min={0} max={10} />
            <input name="perceivedEffort" type="number" value={form.perceivedEffort ?? 0} onChange={handleChange} placeholder="Effort" className="border px-2 py-1 w-20" min={0} max={10} />
            <input name="jointPain" type="number" value={form.jointPain ?? 0} onChange={handleChange} placeholder="Joint Pain" className="border px-2 py-1 w-20" min={0} max={10} />
            <input name="recoveryRating" type="number" value={form.recoveryRating ?? 0} onChange={handleChange} placeholder="Recovery" className="border px-2 py-1 w-20" min={0} max={10} />
            <textarea name="notes" value={form.notes || ''} onChange={handleChange} placeholder="Notes" className="border px-2 py-1" />
            <button type="submit" className="bg-blue-600 text-white px-3 py-1 rounded">
              {editing ? 'Update' : 'Add'}
            </button>
            {editing && <button type="button" className="ml-2 px-3 py-1" onClick={() => { setEditing(null); setForm(initialForm); }}>Cancel</button>}
          </form>
          {data && data.length > 0 ? (
            <table className="min-w-full border text-sm">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border px-2 py-1">User</th>
                  <th className="border px-2 py-1">Date</th>
                  <th className="border px-2 py-1">Exercise</th>
                  <th className="border px-2 py-1">Pump</th>
                  <th className="border px-2 py-1">Effort</th>
                  <th className="border px-2 py-1">Joint Pain</th>
                  <th className="border px-2 py-1">Recovery</th>
                  <th className="border px-2 py-1">Notes</th>
                  <th className="border px-2 py-1">Actions</th>
                </tr>
              </thead>
              <tbody>
                {data.map(fb => (
                  <tr key={fb.id}>
                    <td className="border px-2 py-1">{fb.userId}</td>
                    <td className="border px-2 py-1">{fb.sessionDate}</td>
                    <td className="border px-2 py-1">{fb.exerciseId}</td>
                    <td className="border px-2 py-1">{fb.pump}</td>
                    <td className="border px-2 py-1">{fb.perceivedEffort}</td>
                    <td className="border px-2 py-1">{fb.jointPain}</td>
                    <td className="border px-2 py-1">{fb.recoveryRating}</td>
                    <td className="border px-2 py-1">{fb.notes}</td>
                    <td className="border px-2 py-1">
                      <button className="text-blue-600 mr-2" onClick={() => handleEdit(fb)}>Edit</button>
                      <button className="text-red-600" onClick={() => handleDelete(fb.id)}>Delete</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : !isLoading && !isError ? (
            <EmptyState title="No Feedback" description="No session feedback yet." />
          ) : null}
        </CardContainer>
      </PageLayout>
    </ErrorBoundary>
  );
};

export default SessionFeedback;
