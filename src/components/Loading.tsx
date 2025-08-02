import React from 'react';

export const Loading: React.FC = () => (
  <div className="flex justify-center items-center h-full p-8">
    <span className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900 mr-2"></span>
    <span>Loading...</span>
  </div>
);
