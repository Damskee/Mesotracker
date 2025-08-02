
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PageLayout from '../components/PageLayout';
import CardContainer from '../components/CardContainer';
import TopNavBar from '../components/TopNavBar';
import DrawerNav from '../components/DrawerNav';
import { ErrorBoundary } from '../components/ErrorBoundary';
import { useMesocycles } from '../hooks/useMesocycles';

const MesocyclePlanner: React.FC = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const navigate = useNavigate();
  const { data: mesocycles, isLoading, isError } = useMesocycles();

  return (
    <ErrorBoundary>
      <TopNavBar onMenuClick={() => setDrawerOpen(true)} />
      <DrawerNav open={drawerOpen} onClose={() => setDrawerOpen(false)} />
      <PageLayout title="Mesocycle Planner">
        <div className="flex flex-col gap-4">
          <button
            className="bg-blue-600 text-white font-bold rounded px-4 py-2 self-end mb-2"
            onClick={() => navigate('/mesocycle/create')}
          >
            + Create New Mesocycle
          </button>
          {isLoading && <CardContainer>Loading mesocycles...</CardContainer>}
          {isError && <CardContainer>Error loading mesocycles.</CardContainer>}
          {mesocycles && mesocycles.length > 0 ? (
            mesocycles.map((meso: any) => (
              <CardContainer key={meso.id}>
                <button
                  className="w-full text-left font-semibold text-lg hover:underline"
                  onClick={() => {/* TODO: navigate to mesocycle detail/edit */}}
                >
                  {meso.name || 'Untitled Mesocycle'}
                </button>
                <div className="text-sm text-gray-500">{meso.description}</div>
              </CardContainer>
            ))
          ) : !isLoading && (
            <CardContainer>No mesocycles found.</CardContainer>
          )}
        </div>
      </PageLayout>
    </ErrorBoundary>
  );
};

export default MesocyclePlanner;
