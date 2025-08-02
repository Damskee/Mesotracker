import React, { useState } from 'react';

interface CollapsiblePanelProps {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
  className?: string;
}

const CollapsiblePanel: React.FC<CollapsiblePanelProps> = ({ title, children, defaultOpen = false, className = '' }) => {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className={`rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 mb-4 ${className}`}>
      <button
        className="w-full flex items-center justify-between px-4 py-3 text-left focus:outline-none focus:ring"
        onClick={() => setOpen((prev) => !prev)}
        aria-expanded={open}
      >
        <span className="font-semibold text-gray-700 dark:text-gray-200">{title}</span>
        <span className="ml-2 text-gray-400 dark:text-gray-500">{open ? '−' : '+'}</span>
      </button>
      {open && <div className="px-4 pb-4">{children}</div>}
    </div>
  );
};

export default CollapsiblePanel;
