import React, { useState } from 'react';
import { Button } from '../Button';

type LinkListProps = {
  listOfLinks: Link[] | null;
};

export type Link = {
  original: string;
  shortened: string;
};

export const LinkList: React.FC<LinkListProps> = ({ listOfLinks }) => {
  const [indexOfButton, setIndexOfButton] = useState<number | null>(null);

  const copyText = async (link: string, index: number) => {
    navigator.clipboard.writeText(link);

    setIndexOfButton(index);

    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIndexOfButton(null);
  };

  return (
    <ul className="max-w-container mx-auto w-full">
      {listOfLinks?.map((link, index) => (
        <li
          key={`link.original${Math.ceil(Math.random() * 7000)}`}
          className="flex justify-between text-xl bg-white rounded-[5px] h-[72px] items-center pl-8 pr-6 mb-4 first:mt-6"
        >
          <a href={link.original} className="text-almostBlack font-medium">
            {link.original}
          </a>
          <a
            href={link.shortened}
            className="text-turquoise ml-auto mr-6 font-medium"
          >
            {link.shortened}
          </a>
          <Button
            buttonText={indexOfButton === index ? 'Copied!' : 'Copy'}
            onClick={() => copyText(link.shortened, index)}
            variant="signUp"
            disabled={!!indexOfButton}
          />
        </li>
      ))}
    </ul>
  );
};
