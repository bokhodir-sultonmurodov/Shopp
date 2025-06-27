import React, { useState } from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import carusel from '@/assets/carusel.svg';
import carusell from '@/assets/carusell.svg';
import carusel3 from '@/assets/carusel.png';

const slides = [
  {
    id: 1,
    title: 'Inner Peace',
    type: 'Bed Room',
    img: carusel,
  },
  {
    id: 2,
    title: 'Bright Dining',
    type: 'Dining Room',
    img: carusell,
  },
  {
    id: 3,
    title: 'Modern Style',
    type: 'Living Room',
    img: carusel3,
  },
];

const Carousel = () => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  return (
    <>
  <div className='bg-[#FCF8F3] w-full'>

      <div className="flex flex-col lg:flex-row items-center bg-[#FCF8F3] px-6 lg:px-20 py-12 gap-12 container mx-auto">
      <div className="w-full lg:w-1/2 text-center lg:text-left px-4">
  <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-bold text-[#3A3A3A] mb-4 leading-tight">
    50+ Beautiful rooms <br className="hidden lg:block" /> inspiration
  </h1>
  <p className="text-[#616161] mb-6 max-w-md mx-auto lg:mx-0 text-base sm:text-lg">
    Our designer already made a lot of beautiful prototype of rooms that inspire you
  </p>
  <button className="bg-[#B88E2F] text-white px-6 py-2 font-medium rounded hover:bg-[#a67923] transition duration-300">
    Explore More
  </button>
</div>


        <div className="relative lg:w-1/2 w-full h-[400px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={slides[current].id}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.6 }}
              className="absolute top-0 left-0 w-full h-full group"
            >
              <img
                src={slides[current].img}
                alt={slides[current].title}
                className="rounded-lg shadow-xl w-full h-full object-cover transition duration-500 "
              />
              <div className="absolute bottom-6 left-6 bg-white bg-opacity-90 p-5 rounded shadow-md group-hover:shadow-lg transition">
                <p className="text-[#616161] text-sm">0{slides[current].id} — {slides[current].type}</p>
                <h2 className="text-xl font-bold text-[#3A3A3A]">{slides[current].title}</h2>
                <button className="mt-3 bg-[#B88E2F] text-white p-2 rounded hover:bg-[#a67923] transition duration-300">
                  <FaArrowRight />
                </button>
              </div>
            </motion.div>
          </AnimatePresence>

          <button
            onClick={nextSlide}
            className="absolute right-5 top-1/2 transform -translate-y-1/2 bg-white hover:bg-gray-100 transition rounded-full shadow p-5 z-10"
          >
            <FaArrowRight className="text-[#B88E2F]" />
          </button>

          <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-2">
            {slides.map((_, idx) => (
              <span
                key={idx}
                className={`h-3 w-3 rounded-full transition duration-300 ${idx === current ? 'bg-[#B88E2F]' : 'bg-gray-300'}`}
              ></span>
            ))}
          </div>
        </div>
      </div>
      {/* <div className="flex flex-col items-center mb-[22px] mt-16 text-center px-4">
        <h3 className="text-base sm:text-lg md:text-xl text-[#616161] font-semibold">
          Share your setup with
        </h3>
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] mb-4 text-[#3A3A3A] font-bold">
          #FuniroFurniture
        </h2>
      </div> */}
  </div>


    </>
  );
};

export default React.memo(Carousel);
