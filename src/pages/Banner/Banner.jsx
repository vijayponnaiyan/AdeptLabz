import React from "react";
import Desktop from "../../assets/images/banner/desktop.png";
import Tab from "../../assets/images/banner/Tab.png";
import Mobil from "../../assets/images/banner/mobile.jpg";

export default function Banner() {
  return (
    <div className="relative w-full">
      {/* ✅ Responsive Images */}
      <picture>
        <source media="(min-width: 1024px)" srcSet={Desktop} />
        <source media="(min-width: 768px)" srcSet={Tab} />
        <img src={Mobil} alt="Banner" className="w-full object-cover" />
      </picture>

      {/* ✅ Overlayed Centered Text & Button */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-black px-4 space-y-4 pt-20 sm:pt-24 md:pt-28">
        {/* Responsive Headline */}
        <p className="text-sm sm:text-base md:text-lg lg:text-xl bg-white/70 px-4 py-2 rounded-md shadow-md">
          Clothes that <span className="text-red-600">respire</span>
        </p>
        <p className="text-sm sm:text-base md:text-lg lg:text-xl bg-white/70 px-4 py-2 rounded-md shadow-md">
          for men who <span className="text-red-600">aspire</span>
        </p>

        {/* Responsive Button */}
        <button className="bg-red-500 hover:bg-red-600 px-10 py-3 rounded text-white mt-10 text-sm sm:text-base md:text-lg font-medium shadow-md">
          BROWSE COLLECTIONS
        </button>
      </div>
    </div>
  );
}
