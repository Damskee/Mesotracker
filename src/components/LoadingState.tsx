import React from 'react';

const LoadingState: React.FC<{ message?: string }> = ({ message = 'Loading...' }) => (
  <div className="flex flex-col items-center justify-center py-8 text-gray-500 dark:text-gray-400 animate-pulse">
    <span className="material-icons text-4xl mb-2">hourglass_empty</span>
    <span>{message}</span>
  </div>
);

export default LoadingState;
