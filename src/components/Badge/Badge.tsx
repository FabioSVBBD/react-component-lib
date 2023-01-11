import classNames from 'classnames';
import React from 'react';

export interface BadgeProps {
  tier?: 'positive' | 'negative' | 'warning' | 'neutral';
  children: React.ReactNode;
}

export const Badge: React.FC<BadgeProps> = ({
  tier = 'positive',
  children,
}) => {
  const badgeClass = classNames(
    'rounded-full px-4 py-badge text-sm font-semibold table-cell align-middle',
    {
      'bg-green-200 text-green-600': tier === 'positive',
      'bg-red-200 text-red-500': tier === 'negative',
      'bg-yellow-200 text-yellow-600 ': tier === 'warning',
      'bg-gray-200 text-gray-500': tier === 'neutral',
    }
  );

  return <label className={badgeClass}>{children}</label>;
};
