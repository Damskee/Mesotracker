import React from 'react';

interface SectionDividerProps {
  label?: string;
  className?: string;
}

const SectionDivider: React.FC<SectionDividerProps> = ({ label, className = '' }) => (
  <div className={`flex items-center my-6 ${className}`}>
    <div className="flex-grow border-t border-gray-300 dark:border-gray-700" />
    {label && (
      <span className="mx-4 text-gray-500 dark:text-gray-400 text-sm font-medium whitespace-nowrap">{label}</span>
    )}
    <div className="flex-grow border-t border-gray-300 dark:border-gray-700" />
  </div>
);

export default SectionDivider;
