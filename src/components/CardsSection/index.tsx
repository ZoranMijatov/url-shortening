import clsx from 'clsx';
import { Card, CardProps } from '../Card';

export const CardsSection = ({ cards }: { cards: CardProps[] }) => {
  return (
    <section className="max-w-container mx-auto pt-[120px]">
      <h2 className="text-almostBlack font-bold text-[40px] text-center">
        Advanced Statistics
      </h2>
      <p className="mx-auto text-center text-[#9E9AA8] text-lg max-w-[540px]">
        Track how your links are performing across the web with our advanced
        statistics dashboard.
      </p>
      <div className="grid grid-cols-3 gap-[30px] pt-24">
        {cards.map((card, index) => (
          <div
            key={card.title}
            className={clsx({ 'mt-10': index === 1, 'mt-20': index === 2 })}
          >
            <Card
              title={card.title}
              bodyText={card.bodyText}
              icon={card.icon}
            />
          </div>
        ))}
      </div>
    </section>
  );
};
