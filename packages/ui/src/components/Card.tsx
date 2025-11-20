import React from 'react';

export interface CardProps {
  title?: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export const Card: React.FC<CardProps> = ({ title, children, className = '', onClick }) => {
  const clickable = onClick ? 'cursor-pointer' : '';

  return (
    <div
      className={`bg-white rounded-xl shadow-md p-6 ${clickable} ${className}`}
      onClick={onClick}
    >
      {title && <h3 className="text-xl font-bold mb-4 text-gray-800">{title}</h3>}
      <div className="text-gray-600">{children}</div>
    </div>
  );
};
