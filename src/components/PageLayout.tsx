import React from 'react';

interface PageLayoutProps {
  title: string;
  children: React.ReactNode;
  actionBar?: React.ReactNode;
}

const PageLayout: React.FC<PageLayoutProps> = ({ title, children, actionBar }) => (
  <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
    <header className="sticky top-0 z-20 bg-white dark:bg-gray-800 shadow px-4 py-3 flex items-center justify-between">
      <h1 className="text-xl font-semibold text-gray-900 dark:text-gray-100">{title}</h1>
      {actionBar}
    </header>
    <main className="flex-1 flex flex-col px-2 py-4 md:px-6 md:py-8 w-full max-w-3xl mx-auto">
      {children}
    </main>
    <div className="h-16" />
  </div>
);

export default PageLayout;
