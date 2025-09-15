import React from 'react'
import { IoIosArrowForward } from "react-icons/io";

const Breadcrums = (props) => {
    const {product} = props;
  return (
    <>
    <div className='mt-28 sm:mt-24 mb-0 sm:mb-8 ml-8 gap-2 flex place-items-center text-[13px] sm:text-xl '>
       Home <IoIosArrowForward /> Shop <IoIosArrowForward /> {product.category} <IoIosArrowForward /> {product.name}

    </div>
    </>
  )
}

export default Breadcrums
