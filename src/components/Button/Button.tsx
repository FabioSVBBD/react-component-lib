import React from 'react';

export interface ButtonProps {
  tier?: 'primary' | 'secondary' | 'tertiary';
  disabled?: boolean;
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  tier = 'primary',
  disabled,
  children,
}) => {
  return (
    <button
      className="flex bg-yellow-500 text-2xl"
      onClick={() => alert('thank you!')}
      disabled={disabled}
    >
      {children}
    </button>
  );
};
