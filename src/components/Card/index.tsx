import React from 'react';

export type CardProps = {
  title: string;
  bodyText: string;
  icon: React.ReactNode;
};

export const Card: React.FC<CardProps> = ({ title, bodyText, icon }) => {
  return (
    <div className="bg-white rounded-[5px] relative">
      <div className="px-8 pb-10">
        <div className="rounded-full flex justify-center items-center h-20 w-20 bg-darkPurple absolute left-8 -top-10">
          {icon}
        </div>
        <p className="pt-[77px] font-bold text-[22px] text-almostBlack pb-3">
          {title}
        </p>
        <p className="text-[#9E9AA8] text-[15px] font-medium">{bodyText}</p>
      </div>
    </div>
  );
};
