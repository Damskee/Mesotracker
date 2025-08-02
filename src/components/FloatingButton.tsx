import React from 'react';

const FloatingButton: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement>> = ({ children, className = '', ...props }) => (
  <button
    className={`fixed bottom-6 right-6 z-50 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-lg p-4 flex items-center justify-center transition-transform active:scale-95 ${className}`}
    {...props}
  >
    {children}
  </button>
);

export default FloatingButton;
