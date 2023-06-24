// FilterPill.js
import { useEffect, useState } from 'react';

type FilterButtonProps = {
  children: React.ReactNode;
  onClick: () => void;
  isActive: boolean;
};

export const FilterPill = ({ children, onClick, isActive: isActiveProp }: FilterButtonProps) => {
  const [isActive, setIsActive] = useState(isActiveProp);

  useEffect(() => {
    setIsActive(isActiveProp);
  }, [isActiveProp]);

  const handleClick = () => {
    onClick();
    setIsActive(!isActive);
  };

  return (
    <button
      onClick={handleClick}
      className={`text-xs text-gray-400 w-[8rem] p-2 rounded-3xl ${isActive ? 'bg-[#38b000] text-white border' : 'border'}`}
    >
      {children}
    </button>
  );
};
