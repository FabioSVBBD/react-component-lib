import classNames from 'classnames';
import React, { useState } from 'react';

export interface InputProps {
  name: string;
  label?: string;
  focus?: boolean;
  value: string;
  onChange?: (value: string) => void;
}

export const Input: React.FC<InputProps> = ({
  name,
  label,
  focus = false,
  value,
  onChange,
}) => {
  const [isFocussed, setIsFocussed] = useState(focus);
  const [localValue, setLocalValue] = useState(value);

  const labelClass = classNames('absolute left-4 transition-all', {
    'transform-label':
      isFocussed || (localValue !== '' && localValue !== undefined),
  });

  const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const input = event.target.value || '';
    setLocalValue(input);
    onChange && onChange(input);
  };

  return (
    <section className="flex justify-center items-center bg-solitude w-field h-16 border-1 border-gainsboro rounded-sm relative">
      <div className="relative w-full pl-4 pr-8 text-russian text-base mb-[-0.7rem] h-6">
        <label htmlFor={name} className={labelClass}>
          {label}
        </label>
        <input
          autoFocus={focus}
          onFocus={() => setIsFocussed(true)}
          onBlur={() => setIsFocussed(false)}
          className="absolute left-4 w-90 bg-transparent outline-0"
          value={localValue}
          onChange={onInputChange}
        />
      </div>

      <hr className="w-95 h-tiny border-russian bottom-0 absolute mb-[-1px] left-0 right-0 mx-auto" />
    </section>
  );
};
