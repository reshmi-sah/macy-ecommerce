import React, { useContext } from 'react';
import { ShopContext } from './ShopContext';
import Crossicon from '../ecommerce/ecommerce_images/macycrossicon.jpg';


const Cartitems = () => {
  const {getTotalCartAmount, mergedProducts, cartItems, removeFromCart } = useContext(ShopContext);

  return (
    <div className='mt-32 sm:mt-28 mx-0 sm:mx-10'>
      <div className='grid grid-cols-[0.5fr_2fr_1fr_1fr_1fr_1fr] text-center text-[13px] space-y-5 sm:text-xl font-[500] text-gray-900'>
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr  className=' sm:my-3'/>
      {mergedProducts.map((e) => {
        if (cartItems[e.id] > 0) {
          return (
            <div key={e.id}>
              <div className='grid grid-cols-[0.5fr_2fr_1fr_1fr_1fr_1fr] space-y-5 text-center text-[12px] sm:text-[18px] font-[500] text-gray-800'>
                <img src={e.image} alt=""
                className='w-16 sm:w-24 h-10 sm:h-24 object-cover' />
                <p>{e.name}</p>
                <p>${e.new_price}</p>
                <button>{cartItems[e.id]}</button>
                <p>${e.new_price * cartItems[e.id]}</p>
                <img
                  src={Crossicon}
                  onClick={() => removeFromCart(e.id)}
                  alt="remove"
                  className='w-3 sm:w-8 h-3 sm:h-8 text-gray-700 cursor-pointer'
                />
              </div>
              <hr className='my-3'/>
            </div>
          );
        } 
        return null;
      })}
      <div className="flex justify-center sm:justify-end my-16 mx-0 ">
        <div className=''>
          <h1 className='text-black text-[15px] sm:text-[22px] font-[400]'>Cart totals</h1>
          <div>
            <div className='flex justify-between py-3'>
              <p className='text-[12px] sm:text-[18px]'>Subtotal</p>
              <p className='text-[12px] '>${getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className='flex justify-between  py-3 '>
              <p className='text-[12px] sm:text-[18px]'>Shipping fee</p>
              <p className='text-[12px]'>Free</p>
            </div>
            <hr />
            <div className='flex justify-between  py-3'>
              <h3 className='text-[12px] sm:text-[18px] font-[500]'>Total</h3>
              <h3 className='font-[500] text-[12px] sm:text-[18px]'>${getTotalCartAmount()}</h3>
            </div>
          </div>
          <button className='w-[250px] sm:w-[400px] h-8 sm:h-12 mt-3 outline-none border-0 bg-[#e94242] text-[#fff] text-[12px] sm:text-[16px] font-[300] cursor-pointer'>PROCEED TO CHECKOUT</button>
        </div>
      </div>
    </div>
  );
};

export default Cartitems;
