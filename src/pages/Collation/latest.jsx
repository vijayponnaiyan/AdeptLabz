import React, { useRef } from "react";
import cardone from "../../assets/images/cardone.png";
import cardtwo from "../../assets/images/cardtwo.png";

const products = [
  { id: 1, image: cardone, name: "Printed Polo T-Shirt", price: "1,499.00" },
  { id: 2, image: cardtwo, name: "Printed Polo T-Shirt", price: "1,499.00" },
  { id: 3, image: cardone, name: "Printed Polo T-Shirt", price: "1,499.00" },
  { id: 4, image: cardtwo, name: "Printed Polo T-Shirt", price: "1,499.00" },
  { id: 5, image: cardone, name: "Printed Polo T-Shirt", price: "1,499.00" },
  { id: 1, image: cardone, name: "Printed Polo T-Shirt", price: "1,499.00" },
  { id: 2, image: cardtwo, name: "Printed Polo T-Shirt", price: "1,499.00" },
  { id: 3, image: cardone, name: "Printed Polo T-Shirt", price: "1,499.00" },
  { id: 4, image: cardtwo, name: "Printed Polo T-Shirt", price: "1,499.00" },
  { id: 5, image: cardone, name: "Printed Polo T-Shirt", price: "1,499.00" },
  { id: 1, image: cardone, name: "Printed Polo T-Shirt", price: "1,499.00" },
  { id: 2, image: cardtwo, name: "Printed Polo T-Shirt", price: "1,499.00" },
  { id: 3, image: cardone, name: "Printed Polo T-Shirt", price: "1,499.00" },
  { id: 4, image: cardtwo, name: "Printed Polo T-Shirt", price: "1,499.00" },
  { id: 5, image: cardone, name: "Printed Polo T-Shirt", price: "1,499.00" },
];

export default function Latest() {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === "left" ? -300 : 300,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="py-10 bg-white text-black w-full">
      <div className="flex items-center justify-center mb-6">
        <span className="flex-grow border-t border-gray-300"></span>
        <span className="mx-4 text-gray-500 text-base sm:text-lg md:text-xl lg:text-2xl font-semibold tracking-widest uppercase">
          Latest Collections
        </span>
        <span className="flex-grow border-t border-gray-300"></span>
      </div>

      <div className="relative w-full">
        {/* Scroll Buttons */}
        <button
          onClick={() => scroll("left")}
          className="absolute left-2 top-1/2 transform -translate-y-1/2 z-10 bg-white shadow p-2 rounded-full hidden md:block"
        >
          ◀
        </button>

        <button
          onClick={() => scroll("right")}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 z-10 bg-white shadow p-2 rounded-full hidden md:block"
        >
          ▶
        </button>

        {/* Scrollable Carousel */}
        <div
          ref={scrollRef}
          className="flex overflow-x-auto space-x-4 sm:space-x-6 scrollbar-hide scroll-smooth px-4 sm:px-6 md:px-8"
        >
          {products.map((product) => (
            <div
              key={product.id}
              className="min-w-[90%] sm:min-w-[70%] md:min-w-[40%] lg:min-w-[25%] xl:min-w-[20%] flex-shrink-0"
            >
              <div className="bg-white rounded overflow-hidden shadow-md">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-64 sm:h-72 md:h-80 object-cover rounded-t"
                />
                <p className="text-center text-sm mt-2 text-gray-500">
                  {product.name}
                </p>
                <p className="text-center text-red-500 font-semibold mb-4">
                  ₹{product.price}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
