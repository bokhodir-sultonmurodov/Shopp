import React from 'react'
import { NavLink } from 'react-router-dom'

const Error = () => {
  return (
    <div className="h-screen flex items-center justify-center bg-[#FCF8F3] px-4">
      <div className="text-center max-w-xl">
        <h1 className="text-[100px] font-extrabold text-[#B88E2F] mb-4 leading-none">404</h1>
        <h2 className="text-[28px] sm:text-[34px] md:text-[40px] font-bold text-[#3A3A3A] mb-4">
          We couldn’t find this page
        </h2>
        <p className="text-[#616161] text-base sm:text-lg mb-8">
          Try searching or go to the homepage.
        </p>
        <NavLink
          to="/"
          className="inline-block bg-[#B88E2F] text-white text-sm sm:text-base font-medium px-6 py-3 rounded hover:bg-[#a67923] transition duration-300"
        >
          Go to Homepage
        </NavLink>
      </div>
    </div>
  )
}

export default Error
