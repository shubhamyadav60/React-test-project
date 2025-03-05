import React from 'react';

export const Progress = ({ value = 0 }) => {
  return (
    <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
      <div
        className="h-full bg-blue-500 transition-all duration-500"
        style={{ width: `${value}%` }}
      />
    </div>
  );
};
