import React from 'react';

interface EmptyStateProps {
  title?: string;
  description?: string;
  icon?: React.ReactNode;
  action?: React.ReactNode;
  className?: string;
}

const EmptyState: React.FC<EmptyStateProps> = ({
  title = 'No Data',
  description = 'There is nothing to display here yet.',
  icon,
  action,
  className = '',
}) => (
  <div className={`flex flex-col items-center justify-center text-center py-12 px-4 bg-gray-50 dark:bg-gray-900 rounded-lg border border-dashed border-gray-300 dark:border-gray-700 ${className}`}>
    {icon && <div className="mb-4 text-4xl text-gray-400 dark:text-gray-500">{icon}</div>}
    <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-200 mb-2">{title}</h3>
    <p className="text-gray-500 dark:text-gray-400 mb-4">{description}</p>
    {action && <div>{action}</div>}
  </div>
);

export default EmptyState;
