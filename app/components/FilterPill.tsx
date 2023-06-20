import{ useState } from 'react';

type FilterButtonProps = {
  children: React.ReactNode;
  onClick: () => void;
};

export const FilterPill = ({ children, onClick }: FilterButtonProps) => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick(e);
    setIsActive(!isActive);
  };

  return (
    <button
      onClick={handleClick}
      className={`w-[8rem] text-xs p-2 rounded-3xl ${isActive ? 'bg-[#73a942] opacity-80 text-white border' : 'border text-gray-400'}`}
    >
      {children}
    </button>
  );
};
