import React from 'react';

interface ErrorMessageProps {
  message: string;
  className?: string;
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({ message, className = '' }) => (
  <div className={`bg-red-100 dark:bg-red-900 text-red-700 dark:text-red-200 border border-red-300 dark:border-red-700 rounded px-4 py-2 my-2 ${className}`} role="alert">
    {message}
  </div>
);

export default ErrorMessage;
