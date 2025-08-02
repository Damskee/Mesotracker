import React from 'react';

interface FormGroupProps {
  label: string;
  children: React.ReactNode;
  className?: string;
}

const FormGroup: React.FC<FormGroupProps> = ({ label, children, className = '' }) => (
  <label className={`block mb-2 font-medium text-gray-700 dark:text-gray-200 ${className}`}>
    <span className="block mb-1">{label}</span>
    {children}
  </label>
);

export default FormGroup;
