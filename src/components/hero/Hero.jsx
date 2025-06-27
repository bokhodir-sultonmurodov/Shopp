import React from 'react';
import hero from "@/assets/hero.svg";

const Hero = () => {
  return (
    <section
      className="w-full h-screen bg-no-repeat bg-cover bg-center relative"
      style={{ backgroundImage: `url(${hero})` }}
    >
      <div className="absolute w-full h-full top-0 left-60 container mx-auto">
        <div
          className="flex justify-center items-center h-full
                     md:justify-center md:items-center
                     lg:justify-end lg:items-end
                     px-4 sm:px-8 lg:px-24 lg:pb-24"
        >
          <div
            className="bg-white/40 backdrop-blur- p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12
                       rounded-lg shadow-lg w-full max-w-2xl text-center lg:text-left"
          >
            <p className="text-[12px] sm:text-[14px] tracking-widest text-gray-600 uppercase mb-1 sm:mt-0">
              New Arrival
            </p>

            <h2 className="text-[24px] sm:text-[32px] md:text-[40px] lg:text-[48px] font-bold text-[#B88E2F] mb-4 leading-tight">
              Discover Our <br className="hidden sm:block" />
              New Collection
            </h2>

            <p className="text-[#333333] text-[14px] sm:text-[16px] md:text-[18px] mb-6 sm:mb-[30px] leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              <br className="hidden sm:block" />
              Ut elit tellus, luctus nec ullamcorper mattis.
            </p>

            <button className="bg-[#B88E2F] text-white py-3 px-6 sm:py-[20px] sm:px-[50px] lg:py-[25px] lg:px-[72px] text-sm font-semibold hover:bg-[#c2a86b] transition">
              BUY NOW
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default React.memo(Hero);
