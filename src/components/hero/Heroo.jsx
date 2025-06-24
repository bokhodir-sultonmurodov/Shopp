import React from 'react';
import hero from "@/assets/logoo.svg";
import icon from "@/assets/icon.svg";

const Hero = () => {
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
            <h1 className="text-3xl sm:text-5xl font-medium text-black">Shop</h1>
            <div className="mt-5 flex items-center justify-center gap-2 text-sm text-gray-700">
              <span>Home</span>
              <img src={icon} alt="Arrow" className="w-3 h-3" />
              <span className="font-semibold">Shop</span>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#F9F1E7] w-full px-4 py-4 sm:py-6">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        
          <p className="text-sm text-gray-700">
            <span>Filter |</span>       Showing 1–16 of 32 results</p>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 text-sm">
            <div className="flex items-center gap-2">
              <label htmlFor="show" className="text-gray-700 font-medium">Show</label>
              <select
                id="show"
                className="border border-gray-300 rounded px-2 py-1 text-sm"
              >
                <option value="16">8</option>
                <option value="16">16</option>
                <option value="32">32</option>
                <option value="all">All</option>
              </select>
            </div>

            <div className="flex items-center gap-2">
              <label htmlFor="sort" className="text-gray-700 font-medium">Sort by</label>
              <select
                id="sort"
                className="border border-gray-300 rounded px-2 py-1 text-sm"
              >
                <option value="default">Default</option>
                <option value="newest">Newest</option>
                <option value="newest">Oldest</option>
              </select>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default React.memo(Hero);
