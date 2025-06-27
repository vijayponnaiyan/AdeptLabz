import React, { useEffect, useRef } from "react";
import profile from "../../assets/images/boy.png";

const testimonials = [
  {
    id: 1,
    name: "Vikas",
    review:
      "Love the cloth material! So breezy and comfortable. Really durable as well. I must say the jeans I bought was worth the price.",
    image: profile,
  },
  {
    id: 2,
    name: "Vikas",
    review:
      "Love the cloth material! So breezy and comfortable. Really durable as well. I must say the jeans I bought was worth the price.",
    image: profile,
  },
  {
    id: 3,
    name: "Vikas",
    review:
      "Love the cloth material! So breezy and comfortable. Really durable as well. I must say the jeans I bought was worth the price.",
    image: profile,
  },
  {
    id: 4,
    name: "Vikas",
    review:
      "Love the cloth material! So breezy and comfortable. Really durable as well. I must say the jeans I bought was worth the price.",
    image: profile,
  },
  {
    id: 5,
    name: "Vikas",
    review:
      "Love the cloth material! So breezy and comfortable. Really durable as well. I must say the jeans I bought was worth the price.",
    image: profile,
  },
];

export default function Messages() {
  const scrollRef = useRef(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    let direction = 1;

    const scrollStep = () => {
      if (!scrollContainer) return;

      scrollContainer.scrollLeft += direction;

      if (
        scrollContainer.scrollLeft + scrollContainer.clientWidth >=
        scrollContainer.scrollWidth
      ) {
        direction = -1;
      } else if (scrollContainer.scrollLeft <= 0) {
        direction = 1;
      }
    };

    const interval = setInterval(scrollStep, 20);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className=" py-12">
      <h2 className="text-center text-xl sm:text-2xl md:text-3xl font-semibold tracking-widest uppercase mb-10 text-gray-600">
        Testimonials
      </h2>

      <div
        ref={scrollRef}
        className="flex space-x-6 overflow-x-auto scroll-smooth px-4 sm:px-6 md:px-10 py-2 scrollbar-hide"
      >
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md p-6 w-[75%] sm:w-[70%] md:w-[40%] lg:w-[30%] flex-shrink-0 relative"
          >
            {/* Overlapping circular avatar */}
            <img
              src={testimonial.image}
              alt={testimonial.name}
              className="w-12 h-12 rounded-full object-cover absolute -top-0 left-6 border-2 border-white shadow"
            />

            {/* Content starts beside avatar */}
            <div className="pl-16 pt-2">
              <h3 className="font-semibold text-gray-700">
                {testimonial.name}
              </h3>

              {/* Star rating */}
              <div className="text-yellow-400 text-sm mb-2">★★★★★</div>

              {/* Italic review */}
              <p className="text-sm text-gray-600 italic leading-relaxed">
                {testimonial.review}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
