import { Button } from '../Button';

export const Hero = () => {
  return (
    <section className="pb-[225px] pt-36 bg-white bg-hero bg-no-repeat">
      <div className="mx-auto max-w-container">
        <div className="flex flex-col max-w-hero w-full">
          <h1 className="text-[80px] font-bold text-almostBlack -tracking-[2px] leading-[90px]">
            More than just shorter links
          </h1>
          <p className="text-[#9E9AA8] text-[22px] mb-9">
            Build your brand’s recognition and get detailed insights on how your
            links are performing.
          </p>
          <Button
            buttonText="Get Started"
            variant="primary"
            onClick={() => {}}
          />
        </div>
      </div>
    </section>
  );
};
