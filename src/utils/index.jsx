import React from "react";
import logo from "@/assets/vite.svg";

export const Loading = () => {
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center bg-gradient-to-br from-white via-blue-100 to-purple-100">
      <img
        src={logo}
        alt="Logo"
        className="w-16 h-16 animate-flip mb-6"
      />
      <p className="text-gray-700 text-base font-semibold animate-fade-in">
        Yuklanmoqda...
      </p>
    </div>
  );
};

export const Suspense = ({ children }) => {
  return <React.Suspense fallback={<Loading />}>{children}</React.Suspense>;
};
