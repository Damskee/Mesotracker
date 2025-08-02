import { Suspense, lazy } from 'react';
import type { FC } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';
import { ErrorBoundary } from './components/ErrorBoundary';
import { Loading } from './components/Loading';

const Dashboard = lazy(() => import('./pages/Dashboard'));
const MesocyclePlanner = lazy(() => import('./pages/MesocyclePlanner'));
const ExerciseLibrary = lazy(() => import('./pages/ExerciseLibrary'));
const SessionFeedback = lazy(() => import('./pages/SessionFeedback'));
const Settings = lazy(() => import('./pages/Settings'));

const AppRouter: FC = () => (
  <Router>
    <nav className="flex flex-wrap gap-2 p-2 bg-gray-100 border-b">
      <Link to="/" className="font-semibold">Dashboard</Link>
      <Link to="/mesocycle" className="font-semibold">Mesocycle Planner</Link>
      <Link to="/exercises" className="font-semibold">Exercise Library</Link>
      <Link to="/feedback" className="font-semibold">Session Feedback</Link>
      <Link to="/settings" className="font-semibold">Settings</Link>
    </nav>
    <ErrorBoundary>
      <Suspense fallback={<Loading />}> 
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/mesocycle" element={<MesocyclePlanner />} />
          <Route path="/exercises" element={<ExerciseLibrary />} />
          <Route path="/feedback" element={<SessionFeedback />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Suspense>
    </ErrorBoundary>
  </Router>
);

export default AppRouter;
