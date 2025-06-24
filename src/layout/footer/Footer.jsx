import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full bg-white overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 py-12">
          <div>
            <p className="text-[24px] font-bold text-[#000000]">Funiro.</p>
            <p className="mt-[30px] text-[#000000]">
              400 University Drive Suite 200 <br />
              Coral Gables, <br />
              FL 33134 USA
            </p>
          </div>

          <div>
            <p className="text-[#9F9F9F] font-semibold">Links</p>
            <div className="mt-[30px] text-[#000000] flex flex-col gap-[45px]">
              <p>Home</p>
              <p>Shop</p>
              <p>About</p>
              <p>Contact</p>
            </div>
          </div>

          <div>
            <p className="text-[#9F9F9F] font-semibold">Help</p>
            <div className="mt-[30px] text-[#000000] flex flex-col gap-[45px]">
              <p>Payment Options</p>
              <p>Returns</p>
              <p>Privacy Policies</p>
            </div>
          </div>

          <div>
            <p className="text-[#9F9F9F] font-semibold mb-4">Newsletter</p>
            <div className="flex flex-col sm:flex-row items-center gap-4 w-full">
              <input
                type="email"
                placeholder="Email Address"
                className="w-full border-b border-black bg-transparent placeholder:text-[#9F9F9F] outline-none pb-1"
              />
              <button className="border-b border-black text-black font-medium pb-1 hover:text-[#B88E2F] transition duration-300">
                SUBSCRIBE
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full border-t border-gray-300 py-4 px-4 overflow-hidden">
        <p className="text-center text-sm text-[#3A3A3A] whitespace-nowrap overflow-hidden text-ellipsis">
          © 2023 Funiro. All rights reserved.
        </p>
      </div>

    </footer>
  );
};

export default React.memo(Footer);
