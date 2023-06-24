// ResetPill.js
import { useState } from 'react';

type ResetButtonProps = {
  children: React.ReactNode;
  onClick: () => void;
};

export const ResetPill = ({ children, onClick }: ResetButtonProps) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick(e);
  };

  return (
    <button
      onClick={handleClick}
      className="text-gray-400 text-xs p-2 rounded-xl text-start"
    >
      {children}
    </button>
  );
};
