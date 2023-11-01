import React from 'react';
import clsx from 'clsx';

type InputProps = {
  type: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  value?: string;
  placeholder: string;
  disabled?: boolean;
  errorMessage?: string;
};

export const Input: React.FC<InputProps> = ({
  type,
  value,
  placeholder,
  onChange,
  disabled,
  errorMessage,
}) => {
  return (
    <div className="flex flex-col w-full relative">
      <input
        className={clsx(
          'h-16 bg-white pl-8 w-full rounded-[10px]',
          errorMessage && 'border-[3px] border-error placeholder:text-error',
        )}
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        disabled={disabled}
      />
      <p
        className={clsx(
          'opacity-0 italic text-error transition-opacity duration-500 ease-in-out absolute -bottom-6 left-0',
          {
            'opacity-100': errorMessage,
          },
        )}
      >
        {errorMessage}
      </p>
    </div>
  );
};
