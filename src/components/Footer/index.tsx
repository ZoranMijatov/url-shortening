import LogoWhite from '../../assets/logo-white.svg?react';
import SocialMedia from '../../assets/social-media.svg?react';

export const Footer = () => {
  return (
    <footer className="bg-[#232127]">
      <div className="flex max-w-container mx-auto flex-wrap py-16 sm:justify-between justify-center">
        <LogoWhite />
        <div className="pt-12 sm:pt-0 max-w-[740px] w-full flex justify-between gap-9 sm:gap-0 flex-wrap flex-col sm:flex-row items-center sm:items-start text-center sm:text-left">
          <div className="flex flex-col">
            <strong className="text-white mb-5">Features</strong>
            <a
              className="text-footerLink mb-[10px] transition-colors hover:text-turquoise ease-in-out duration-300"
              href=""
            >
              Link Shortening
            </a>
            <a
              className="text-footerLink mb-[10px] transition-colors hover:text-turquoise ease-in-out duration-300"
              href=""
            >
              Branded Links
            </a>
            <a
              className="text-footerLink mb-[10px] transition-colors hover:text-turquoise ease-in-out duration-300"
              href=""
            >
              Analytics
            </a>
          </div>
          <div className="flex flex-col">
            <strong className="text-white mb-5">Resources</strong>
            <a
              className="text-footerLink mb-[10px] transition-colors hover:text-turquoise ease-in-out duration-300"
              href=""
            >
              Link Shortening
            </a>
            <a
              className="text-footerLink mb-[10px] transition-colors hover:text-turquoise ease-in-out duration-300"
              href=""
            >
              Branded Links
            </a>
            <a
              className="text-footerLink mb-[10px] transition-colors hover:text-turquoise ease-in-out duration-300"
              href=""
            >
              Analytics
            </a>
          </div>
          <div className="flex flex-col">
            <strong className="text-white mb-5">Company</strong>
            <a
              className="text-footerLink mb-[10px] transition-colors hover:text-turquoise ease-in-out duration-300"
              href=""
            >
              Link Shortening
            </a>
            <a
              className="text-footerLink mb-[10px] transition-colors hover:text-turquoise ease-in-out duration-300"
              href=""
            >
              Branded Links
            </a>
            <a
              className="text-footerLink mb-[10px] transition-colors hover:text-turquoise ease-in-out duration-300"
              href=""
            >
              Analytics
            </a>
          </div>
          <SocialMedia />
        </div>
      </div>
    </footer>
  );
};
