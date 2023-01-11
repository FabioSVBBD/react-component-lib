import React from 'react';

export interface InputProps {
  value: string;
}

export const Input: React.FC<InputProps> = ({ value }) => (
  <input value={value} />
);
