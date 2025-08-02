




import type { FC } from 'react';
import PageLayout from '../components/PageLayout';
import CardContainer from '../components/CardContainer';

const MesocyclePlanner: FC = () => (
  <PageLayout title="Mesocycle Planner">
    <CardContainer>
      <p>Plan your training blocks, deloads, and weekly splits here.</p>
    </CardContainer>
  </PageLayout>
);

export default MesocyclePlanner;
