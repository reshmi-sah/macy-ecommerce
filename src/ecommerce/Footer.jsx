import React from 'react'
import Logo from '../ecommerce/ecommerce_images/macylogo.png'


const Footer = () => {
  return (
   <>
   <div className='flex flex-wrap  text-center justify-around bg-white p-5 shadow-[0_-4px_6px_rgba(0,0,0,0.1)] rounded-t-[2.5rem] sm:rounded-t-[5rem]'>
    <img src={Logo} alt="" className='w-16 h-10 sm:w-28 sm:h-16' />
    <div className='flex  text-center gap-6 sm:gap-10 cursor-pointer text-[12px] sm:text-[19px]'>
      <p className='text-gray-800 hover:text-black '>© 2025 Shopping</p>
      <p className='text-gray-800 hover:text-black '>Terms</p>
      <p className='text-gray-800 hover:text-black '>Privacy</p>
      <p className='text-gray-800 hover:text-black '>Cookies</p>
    </div>
   </div>
  
   </>
  )
}

export default Footer
