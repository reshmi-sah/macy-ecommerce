
import React, { useRef, useContext } from 'react';
import Ecoshop from './Ecoshop';
import { ShopContext } from './ShopContext';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const Shopsection = ({ category, title }) => {
  const scrollRef = useRef(null);
  const { data_product } = useContext(ShopContext);

  // Filter products by category (if category is provided)
  const filteredProducts = category
    ? data_product.filter(item => item.category === category)
    : data_product;

  // Scroll function
  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 350;
      if (direction === 'left') {
        scrollRef.current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
      } else {
        scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      }
    }
  };

  return (
    <div className="relative ml-10 mr-10  overflow-auto">
      {/* Title */}
      <div className="flex flex-col items-center text-center">
        <h1 className="text-3xl sm:text-4xl font-medium">{title || "Popular Products"}</h1>
        <hr className="w-32 h-[5px] mt-1 mb-8 rounded-2xl bg-black mx-auto" />
      </div>

      {/* Left Button */}
      <button
        onClick={() => scroll('left')}
        className="absolute left-0 top-1/2 -translate-y-1/2 rounded-full p-2 bg-gradient-to-r from-sky-400 to-pink-600 shadow-md hover:from-sky-500 hover:to-pink-500 z-10"
      >
        <IoIosArrowBack size={20}  />
      </button>

      {/* Scrollable Product List */}
      <div
        ref={scrollRef}
        className="flex overflow-x-auto gap-5  no-scrollbar scroll-smooth bg-gray-100"
      >
        {filteredProducts.map((item) => (
          <Ecoshop
            key={item.id}
            id={item.id}
            name={item.name}
            image={item.image}
            new_price={item.new_price}
            old_price={item.old_price}
            desc={item.desc}
          />
        ))}
      </div>


      {/* Right Button */}
      <button
        onClick={() => scroll('right')}
        className="absolute right-0 top-1/2 -translate-y-1/2 rounded-full p-2 shadow-md z-10 bg-gradient-to-r from-sky-400 to-pink-600 hover:from-sky-500 hover:to-pink-500"
      >
        <IoIosArrowForward size={20}/>
      </button>
    </div>
  );
};

export default Shopsection;
