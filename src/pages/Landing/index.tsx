import { useState } from 'react';
import { Banner } from '../../components/Banner';
import { CardsSection } from '../../components/CardsSection';
import { Footer } from '../../components/Footer';
import { Form } from '../../components/Form';
import { Header } from '../../components/Header';
import { Hero } from '../../components/Hero';
import { LinkList } from '../../components/LinkList';
import { cardArray } from '../../utils/cardArray';

export const Landing = () => {
  const links = localStorage.getItem('links');
  const parsedLinks = JSON.parse(links as string);
  const [linksList, setLinksList] = useState(parsedLinks ?? []);

  return (
    <div className="w-full bg-[#EFF1F7]">
      <Header />
      <Hero />
      <Form linksList={linksList} setLinksList={setLinksList} />
      <LinkList listOfLinks={linksList} />
      <CardsSection cards={cardArray} />
      <Banner />
      <Footer />
    </div>
  );
};
