import React from 'react';

type ButtonProps = {
  variant: ButtonVariant;
  buttonText: string;
  type?: 'button' | 'submit';
  onClick?: React.MouseEventHandler;
  disabled?: boolean;
};

type ButtonVariant = 'primary' | 'signUp' | 'banner';

export const Button: React.FC<ButtonProps> = ({
  variant,
  buttonText,
  type,
  onClick,
  disabled,
}) => {
  return (
    <button
      className={variants[variant]}
      type={type ?? 'button'}
      onClick={onClick}
      disabled={disabled}
    >
      {buttonText}
    </button>
  );
};

const variants: Record<ButtonVariant, string> = {
  primary:
    'bg-turquoise font-bold text-white text-lg rounded-[10px] shrink-0 w-fit px-10 py-3 transition-colors hover:bg-buttonHover duration-300',
  banner:
    'bg-turquoise font-bold text-white text-lg rounded-[28px] shrink-0 w-fit px-10 py-3 transition-colors hover:bg-buttonHover duration-300',
  signUp:
    'bg-turquoise focus:bg-darkPurple font-bold text-white text-sm rounded-[28px] shrink-0 w-fit px-6 py-2 transition-colors hover:bg-buttonHover duration-300',
};
