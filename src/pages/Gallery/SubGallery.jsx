import React from "react";
import Left from "../../assets/images/gallery/Group 204.png";
import Rightone from "../../assets/images/gallery/Group 203.png";
import Righttwo from "../../assets/images/gallery/Group 205.png";

export default function SubGallery() {
  return (
    <div className="w-full mx-auto px-0 py-0">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 px-1">
        {/* Left image */}
        <div>
          <img
            src={Left}
            alt="Left Image"
            className="w-full h-full object-cover rounded transition-transform duration-300 ease-in-out hover:scale-105"
          />
        </div>

        {/* Right stacked images */}
        <div className="flex flex-col gap-2">
          <img
            src={Righttwo}
            alt="Right Bottom"
            className="w-full object-cover rounded transition-transform duration-300 ease-in-out hover:scale-105"
          />
          <img
            src={Rightone}
            alt="Right Top"
            className="w-full object-cover rounded transition-transform duration-300 ease-in-out hover:scale-105"
          />
        </div>
      </div>
    </div>
  );
}
