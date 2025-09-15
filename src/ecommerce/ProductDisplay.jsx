import React, { useContext, useState } from 'react';
import rating from '../ecommerce/ecommerce_images/macyrating.png'
import { div } from 'motion/react-client';
import Review from '../ecommerce/Review'
import { ShopContext } from './ShopContext';

const ProductDisplay = ({ product }) => {
  const [mainImage, setMainImage] = useState(product.image);  // state for big image
  const {addToCart} = useContext(ShopContext);

  return (
    <div className='flex flex-wrap  justify-center gap-10 px-10 py-6'>
      <div className="flex flex-col sm:flex-row text-center justify-center gap-6">
  
  {/* Thumbnails (left in laptop, below in mobile) */}
  <div className="order-2 sm:order-1 flex flex-row sm:flex-col  gap-3 mt-1 sm:mt-0">
    {product.thumbnails?.map((thumb, index) => (
      <img
        key={index}
        src={thumb}
        alt={`Thumbnail ${index + 1}`}
        className={`w-[80px] h-[70px] sm:w-[90px] sm:h-[90px] object-cover cursor-pointer  rounded-md 
        transition-all duration-300 ease-in-out hover:scale-105 border ${  mainImage === thumb ? "border-2 border-black": "border border-gray-300" }`}
        onClick={() => setMainImage(thumb)}
      />
    ))}
  </div>

  {/* Main Image (right in laptop, top in mobile) */}
  <div className="order-1 sm:order-2 flex justify-center">
    <img
      src={mainImage}
      alt={product.name}
      className="w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] object-cover"
    />
  </div>
</div>

      {/* Right Section */}
      <div className="max-w-xl space-y-5">
        <h1 className='text-[20px] sm:text-[28px] text-black font-[500]'>Macy's takes first place in terms of net sales.</h1>
        <h1 className='text-[20px] '>{product.name}</h1>
        <div className="">
            {/* <img src={rating} alt="" 
            className='w-20 h-5 sm:w-32 sm:h-8'/>
            <span className='text-[16px] sm:text-xl'>(122)</span> */}
            <Review />
        </div>
        <div className="flex gap-4 ">
            <div className='text-[20px] sm:text-2xl text-[#ff4141] font-[500]'>${product.new_price}</div>
            <div className='text-[20px] text-2xl text-gray-900 font-[500] line-through'>${product.old_price}</div>
        </div>
        <div className="text-[16px] text-gray-700 ">
           An Indian fashion brand, part of the Tata Group's Trent Ltd, known for its affordable and trendy clothing for men, women, and children. It's positioned as a fast-fashion retailer targeting younger shoppers with a wide range of styles and products, including footwear and beauty items.
        </div>
        <div className="size space-y-4">
          <h1 className='text-xl font-[600]'>Select Size</h1>
          <div className='flex text-center gap-3 text-[13px] sm:text-[16px] font-[500] cursor-pointer '>
            <div className='border-2 border-[#bfbbbb] px-3 sm:px-4 py-1 sm:py-2 bg-[#edebeb]'>S</div>
            <div className='border-2 border-[#bfbbbb] px-3 sm:px-4 py-1 sm:py-2 bg-[#edebeb]'>M</div>
            <div className='border-2 border-[#bfbbbb] px-3 sm:px-4 py-1 sm:py-2 bg-[#edebeb]'>L</div>
            <div className='border-2 border-[#bfbbbb] px-3 sm:px-4 py-1 sm:py-2 bg-[#edebeb]'>XL</div>
            <div className='border-2 border-[#bfbbbb] px-3 sm:px-4 py-1 sm:py-2 bg-[#edebeb]'>XXL</div>
          </div>
        </div>
        
        <button 
        onClick={()=>{addToCart(product.id)}}
         className='h-10 w-32 text-xl sm:h-14 sm:w-44 sm:text-2xl text-white font-[500] bg-[#fc4242] hover:bg-[#ec3c3c] outline-none border-0 cursor-pointer '>
          Add to cart</button>
      <p className='text-[16px] sm:text-[20px] text-sky-500 font-[400]'>Tags, Modern & Latest</p>
      </div>
    </div>
  );
};

export default ProductDisplay;


