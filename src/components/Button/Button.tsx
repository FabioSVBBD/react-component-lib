import React, { useContext } from 'react';
import classNames from 'classnames';
import { ThemeContext } from '../../context/theme-context';

export interface ButtonProps {
  tier?: 'primary' | 'secondary' | 'tertiary';
  disabled?: boolean;
  onClick: () => void;
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  tier = 'primary',
  disabled,
  children,
  onClick,
}) => {
  const { theme } = useContext(ThemeContext);

  const buttonClass = classNames(
    'flex justify-center items-center rounded-md shadow-md px-4 py-1 min-w-button text-lg font-semibold',
    {
      // light
      'bg-blue-700/90 text-white': tier === 'primary',
      'bg-black text-white shadow-lg':
        tier === 'secondary' && theme === 'light',
      'bg-white border-2 border-black text-black':
        tier === 'tertiary' && theme === 'light',

      // dark
      'bg-white text-black': tier === 'secondary' && theme === 'dark',
      'bg-black text-white border-2 border-white':
        tier === 'tertiary' && theme === 'dark',

      // disabled
      'opacity-50 cursor-not-allowed': disabled,
    }
  );

  return (
    <button className={buttonClass} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
};
