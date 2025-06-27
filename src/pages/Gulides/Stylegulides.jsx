import React from "react";
import bgImage from "../../assets/images/banner/banner2.png";

export default function Styleguides() {
  return (
    <div
      className="relative w-full bg-cover bg-center bg-no-repeat flex items-center justify-center min-h-[400px] sm:min-h-[500px] md:min-h-[600px] lg:min-h-[400px] px-4"
      style={{
        backgroundImage: `url(${bgImage})`,
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30 z-0"></div>

      {/* Content */}
      <div className="text-center max-w-xl w-full text-white z-10">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2">
          GET COUPONS & STYLE GUIDES
        </h2>
        <p className="text-sm sm:text-base mb-6">Subscribe to our Newsletter</p>

        <form
          className="flex flex-col sm:flex-row items-center justify-center gap-2"
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            type="email"
            placeholder="E-mail ID"
            className="w-full sm:w-72 px-4 py-3 rounded text-gray-800 bg-white focus:outline-none"
            required
          />
          <button
            type="submit"
            className="w-full sm:w-auto px-6 py-3 rounded font-semibold bg-red-600 hover:bg-red-700 text-white"
          >
            SUBSCRIBE
          </button>
        </form>
      </div>
    </div>
  );
}
