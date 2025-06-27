import React, { useEffect, useRef, useState } from "react";

// ✅ Images
import zero from "../../assets/images/Mask Group(0).png";
import one from "../../assets/images/Mask Group (1).png";
import two from "../../assets/images/Mask Group (2).png";
import three from "../../assets/images/Mask Group (3).png";
import four from "../../assets/images/Mask Group(0).png";

const categories = [
  { id: 1, name: "For Me", img: zero },
  { id: 2, name: "Jeans", img: one },
  { id: 3, name: "T-Shirts", img: two },
  { id: 4, name: "Shirts", img: three },
  { id: 5, name: "Trousers", img: four },
  { id: 1, name: "For Me", img: zero },
  { id: 2, name: "Jeans", img: one },
  { id: 3, name: "T-Shirts", img: two },
  { id: 4, name: "Shirts", img: three },
  { id: 5, name: "Trousers", img: four },
  { id: 1, name: "For Me", img: zero },
  { id: 2, name: "Jeans", img: one },
  { id: 3, name: "T-Shirts", img: two },
  { id: 4, name: "Shirts", img: three },
  { id: 5, name: "Trousers", img: four },
];

const SubNavbar = () => {
  const [selectedId, setSelectedId] = useState(1);
  const scrollRef = useRef(null);

  const scroll = (dir) => {
    const container = scrollRef.current;
    if (!container) return;

    const scrollAmount = 100;
    container.scrollBy({
      left: dir === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const interval = setInterval(() => {
      scroll("right");
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="block lg:hidden bg-white border-b shadow-md w-full py-3 px-5 ">
      <div className="flex items-center justify-between">
        {/* Left Arrow */}
        <button
          onClick={() => scroll("left")}
          className="text-xl text-black hover:text-red-500 px-2"
        >
          ❮
        </button>

        {/* Scrollable Categories */}
        <div
          ref={scrollRef}
          className="flex gap-4 px-2 overflow-x-auto scroll-smooth whitespace-nowrap scrollbar-hide"
        >
          {categories.map((cat) => (
            <div
              key={cat.id}
              onClick={() => setSelectedId(cat.id)}
              className="flex flex-col items-center cursor-pointer flex-shrink-0"
            >
              <img
                src={cat.img}
                alt={cat.name}
                className={`w-12 h-12 rounded-full border-2 object-cover transition-all duration-300 ${
                  selectedId === cat.id
                    ? "border-red-500"
                    : "border-transparent"
                }`}
              />
              <span className="text-xs mt-1 text-[#444444]">{cat.name}</span>
            </div>
          ))}
        </div>

        {/* Right Arrow */}
        <button
          onClick={() => scroll("right")}
          className="text-xl text-black hover:text-red-500 px-2"
        >
          ❯
        </button>
      </div>
    </div>
  );
};

export default SubNavbar;
