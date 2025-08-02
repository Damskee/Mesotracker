import React from 'react';
import { Link } from 'react-router-dom';

const DrawerNav: React.FC<{ open: boolean; onClose: () => void }> = ({ open, onClose }) => (
  <div className={`fixed inset-0 z-40 transition-transform duration-300 ${open ? 'translate-x-0' : '-translate-x-full'} bg-black bg-opacity-30 md:hidden`} onClick={onClose}>
    <nav className="absolute left-0 top-0 h-full w-64 bg-white dark:bg-gray-800 shadow-lg p-6 flex flex-col gap-4" onClick={e => e.stopPropagation()}>
      <Link to="/" className="font-semibold text-lg" onClick={onClose}>Dashboard</Link>
      <Link to="/mesocycle" className="font-semibold" onClick={onClose}>Mesocycle Planner</Link>
      <Link to="/exercises" className="font-semibold" onClick={onClose}>Exercise Library</Link>
      <Link to="/feedback" className="font-semibold" onClick={onClose}>Session Feedback</Link>
      <Link to="/settings" className="font-semibold" onClick={onClose}>Settings</Link>
    </nav>
  </div>
);

export default DrawerNav;
