import React from 'react';

interface SlideInPanelProps {
  open: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
  className?: string;
}

const SlideInPanel: React.FC<SlideInPanelProps> = ({ open, onClose, title, children, className = '' }) => {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex">
      <div className="fixed inset-0 bg-black bg-opacity-40" onClick={onClose} />
      <div className={`ml-auto w-full max-w-md h-full bg-white dark:bg-gray-900 shadow-xl p-6 overflow-y-auto relative ${className}`}>
        <button
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200"
          onClick={onClose}
          aria-label="Close panel"
        >
          ×
        </button>
        {title && <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-100">{title}</h2>}
        {children}
      </div>
    </div>
  );
};

export default SlideInPanel;
