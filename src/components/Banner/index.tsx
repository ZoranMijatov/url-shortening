import { Button } from '../Button';
import {} from '../../assets/decorative-blobs/left-banner-blob.svg';

export const Banner = () => {
  return (
    <section className="bg-darkPurple text-center mt-32 bg-banner bg-no-repeat">
      <div className="py-[57px]">
        <h2 className="text-white font-bold text-5xl mb-8">
          Boost your links today
        </h2>
        <Button buttonText="Get Started" variant="banner" onClick={() => {}} />
      </div>
    </section>
  );
};
