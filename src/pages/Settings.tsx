import React, { useState, useEffect } from 'react';
import { useSettings, useUpdateSettings } from '../hooks/useSettings';
import type { Settings as SettingsType } from '../types/settings';
import PageLayout from '../components/PageLayout';
import CardContainer from '../components/CardContainer';
import ErrorMessage from '../components/ErrorMessage';
import TopNavBar from '../components/TopNavBar';
import DrawerNav from '../components/DrawerNav';
import { ErrorBoundary } from '../components/ErrorBoundary';

const userId = '1'; // TODO: Replace with real user context

const Settings: React.FC = () => {
  const { data, isLoading, isError, error } = useSettings(userId);
  const updateMutation = useUpdateSettings(userId);
  const [form, setForm] = useState<Partial<SettingsType>>();
  const [editing, setEditing] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    if (data) setForm(data);
  }, [data]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      setForm((f: Partial<SettingsType> | undefined) => ({ ...f, [name]: (e.target as HTMLInputElement).checked }));
    } else {
      setForm((f: Partial<SettingsType> | undefined) => ({ ...f, [name]: value }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (form) updateMutation.mutate(form);
    setEditing(false);
  };

  return (
    <ErrorBoundary>
      <TopNavBar onMenuClick={() => setDrawerOpen(true)} />
      <DrawerNav open={drawerOpen} onClose={() => setDrawerOpen(false)} />
      <PageLayout title="Settings">
        <CardContainer>
          {isLoading && <div>Loading...</div>}
          {isError && <ErrorMessage message={error?.message || 'Failed to load settings.'} />}
          {form && (
            <form className="flex flex-col gap-2 max-w-sm" onSubmit={handleSubmit}>
              <label className="font-semibold">Units
                <select name="unitPreference" value={form.unitPreference || 'kg'} onChange={handleChange} className="border px-2 py-1 ml-2">
                  <option value="kg">kg</option>
                  <option value="lbs">lbs</option>
                </select>
              </label>
              <label className="font-semibold">Notifications
                <input type="checkbox" name="notifications" checked={!!form.notifications} onChange={handleChange} className="ml-2" />
              </label>
              <label className="font-semibold">Dark Mode
                <input type="checkbox" name="darkMode" checked={!!form.darkMode} onChange={handleChange} className="ml-2" />
              </label>
              <div className="flex gap-2 mt-2">
                <button type="submit" className="bg-blue-600 text-white px-3 py-1 rounded" disabled={updateMutation.status === 'pending'}>Save</button>
                {!editing && <button type="button" className="px-3 py-1" onClick={() => setEditing(true)}>Edit</button>}
              </div>
            </form>
          )}
        </CardContainer>
      </PageLayout>
    </ErrorBoundary>
  );
};

export default Settings;
