// ResetPill.js
import { useState } from 'react';

type FilterButtonProps = {
  children: React.ReactNode;
  onClick: () => void;
};

export const ResetPill = ({ children, onClick }: FilterButtonProps) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick(e);
  };

  return (
    <button
      onClick={handleClick}
      className="text-gray-400 text-xs py-1 rounded-xl"
    >
      {children}
    </button>
  );
};
