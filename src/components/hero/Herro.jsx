import React from 'react';
import hero from "@/assets/logoo.svg";
import icon from "@/assets/icon.svg";

const Herro = () => {
  return (
    <>
      <section className="relative w-full overflow-hidden">
        <img
          src={hero}
          alt="Hero Background"
          className="w-full h-auto object-contain"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="px-6 py-4 rounded-md text-center">
            <h1 className="text-3xl sm:text-5xl font-medium text-black">Cart</h1>
            <div className="mt-5 flex items-center justify-center gap-2 text-sm text-gray-700">
              <span>Home</span>
              <img src={icon} alt="Arrow" className="w-3 h-3" />
              <span className="font-semibold">Cart</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default React.memo(Herro);
