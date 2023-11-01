import clsx from 'clsx';
import Logo from '../../assets/logo.svg?react';
import { Button } from '../Button';

export const Header = () => {
  return (
    <header className="max-w-container mx-auto w-full flex justify-between items-center mt-12">
      <div className="flex items-center">
        <Logo />
        {['Features', 'Pricing', 'Resources'].map((link, index) => (
          <a
            className={clsx(
              'text-headerLink font-bold text-sm mr-8 hover:text-almostBlack duration-300 ease-in-out transition-colors',
              {
                'ml-11': index === 0,
              },
            )}
            key={link}
            href={link}
          >
            {link}
          </a>
        ))}
      </div>
      <div className="flex items-center">
        <a
          className="text-headerLink font-bold text-sm mr-8 hover:text-almostBlack duration-300 ease-in-out transition-colors"
          href={'#'}
        >
          Login
        </a>
        <Button buttonText="Sign Up" variant="signUp" onClick={() => {}} />
      </div>
    </header>
  );
};
