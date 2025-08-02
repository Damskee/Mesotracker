import React from 'react';

const CardContainer: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = '' }) => (
  <div className={`bg-white dark:bg-gray-800 shadow rounded-lg border border-gray-200 dark:border-gray-700 p-4 mb-4 ${className}`}>
    {children}
  </div>
);

export default CardContainer;
