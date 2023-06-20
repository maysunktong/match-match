import{ useState } from 'react';

type FilterButtonProps = {
  children: React.ReactNode;
  onClick: () => void;
};

export const ResetPill = ({ children, onClick }: FilterButtonProps) => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick(e);
    setIsActive(!isActive);
  };

  return (
    <button
      onClick={handleClick}
      className="text-gray-400 text-xs"
    >
      {children}
    </button>
  );
};
