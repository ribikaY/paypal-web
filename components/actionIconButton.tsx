import type React from 'react';
import type { ReactNode } from 'react';
import { Button } from './ui/button';

interface ActionButtonProps {
  onClick: () => void; 
  icon: ReactNode; 
  children?: ReactNode;
  className?: string;
}

const ActionIconButton: React.FC<ActionButtonProps> = ({ onClick, children, className }) => {
  return (
    <Button
      onClick={onClick}
      className={`py-2 px-4 rounded bg-blue-500 text-white hover:bg-blue-600 transition ${className}`}
    >
      {children}
    </Button>
  );
};

export default ActionIconButton;
