import React from 'react';
import classNames from 'classnames';

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
  const buttonClass = classNames(
    'flex justify-center items-center rounded-md shadow-md px-4 py-1 min-w-button text-lg font-semibold',
    {
      'bg-blue-700/90 text-white': tier === 'primary',
      'bg-white text-black/80': tier === 'secondary',
      'bg-white border-2 border-black/80 text-black/80': tier === 'tertiary',
      'opacity-50 cursor-not-allowed': disabled,
    }
  );

  return (
    <button
      className={buttonClass}
      onClick={() => alert('thank you!')}
      disabled={disabled}
    >
      {children}
    </button>
  );
};
