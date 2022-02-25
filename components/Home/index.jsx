import React from "react";
import UnderConstruction from "../Svg/UnderConstruction";
import LandScape from "../Svg/LandScape";

const CHome = () => {
  return (
    <div className="min-h-screen font-Roboto flex flex-col items-center text-center justify-between py-8">
      <div className="w-[186px] sm:w-[270px]">
        <LandScape />
      </div>
      <div className="w-full flex flex-col items-center justify-center">
        <div className="w-[244px] sm:w-[400px] flex justify-center">
          {/* <UnderConstruction /> */}
          <img
            className="w-[244px] sm:w-[360px]"
            src="under-construction.svg"
            alt="Logo"
          />
        </div>
        <h1 className="text-[#1B5CCA] font-semibold text-xl sm:text-2xl md:text-4xl">
          Website Coming Soon
        </h1>
        <div className="flex flex-col items-center">
          <p className="sm:text-xl">We are currently working on the website.</p>
          <p className="sm:text-xl">Stay Tuned!</p>
        </div>
      </div>
      <div className="text-center">
        <p className="text-xl font-semibold text-gray-300">Our Partner</p>
        <img className="w-[129px] sm:w-full" src="logo.png" alt="Logo" />
      </div>
    </div>
  );
};

export default CHome;
