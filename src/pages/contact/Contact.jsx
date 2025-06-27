import Hhero from '@/components/hero/Hhero';
import React from 'react';
import { FaMapMarkerAlt, FaPhoneAlt, FaClock } from 'react-icons/fa';

const Contact = () => {
  return (
    <>
    
        <Hhero/>
    <div className="w-full px-4 py-12 md:px-8 lg:px-24 container mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold text-center">Get In Touch With Us</h2>
      <p className="text-center text-[#9F9F9F] mt-2 max-w-2xl mx-auto">
        For More Information About Our Product & Services. Please Feel Free To Drop Us An Email.
        Our Staff Always Be There To Help You Out. Do Not Hesitate!
      </p>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="space-y-10">
          <div className="flex items-start gap-4">
            <FaMapMarkerAlt className="text-xl mt-1 text-black" />
            <div>
              <h4 className="text-lg font-semibold">Address</h4>
              <p className="text-gray-600">236 5th SE Avenue, New <br /> York NY10000, United States</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <FaPhoneAlt className="text-xl mt-1 text-black" />
            <div>
              <h4 className="text-lg font-semibold">Phone</h4>
              <p className="text-gray-600">Mobile: +(84) 546-6789</p>
              <p className="text-gray-600">Hotline: +(84) 456-6789</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <FaClock className="text-xl mt-1 text-black" />
            <div>
              <h4 className="text-lg font-semibold">Working Time</h4>
              <p className="text-gray-600">Monday–Friday: 9:00 – 22:00</p>
              <p className="text-gray-600">Saturday–Sunday: 9:00 – 21:00</p>
            </div>
          </div>
        </div>

        <form  onSubmit={(e) => {
    e.preventDefault(); }} className="space-y-6">
          <div>
            <label className="block text-sm font-medium mb-1">Your name</label>
            <input
              type="text"
              placeholder="Abc"
              className="w-full border border-gray-300 px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-600"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Email address</label>
            <input
              type="email"
              placeholder="Abc@def.com"
              className="w-full border border-gray-300 px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-600"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Subject</label>
            <input
              type="text"
              placeholder="This is an optional"
              className="w-full border border-gray-300 px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-600"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Message</label>
            <textarea
              placeholder="Hi! I’d like to ask about"
              rows="4"
              className="w-full border border-gray-300 px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-600"
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-[#B88E2F] text-white font-semibold py-[13px] px-[88px] rounded-md hover:bg-yellow-800 transition"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
    </>
  );
};

export default Contact;
