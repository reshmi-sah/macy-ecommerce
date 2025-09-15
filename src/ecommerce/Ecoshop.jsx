
import React from 'react';
import { Link } from 'react-router-dom';


const Ecoshop = (props) => {
  return (
    <div className='shadow-xl  gap-2 sm:gap-7 bg-white p-1 sm:p-3 rounded-lg  transform hover:scale-[1.08] 
    transition-[0.6] min-w-[150px] sm:min-w-[200px] lg:min-w-[250px] h-auto mt-4 md:mt-8 ml-2 mr-2
    md:ml-4 md:mr-4 mb:4 sm:mb-10  border-2 border-gray-300'>
      <Link to={`/product/${props.id}`}><img src={props.image} alt="" className='w-32 sm:w-full h-44 sm:h-72 object-contain' /></Link>
      <p className='pt-2 sm:pt-3 text-[16px] sm:text-xl '>{props.name}</p>
      <div className=' flex '>
        <div className=' text-black text-[16px] sm:text-xl '>
          ${props.new_price}
        </div>
        <div className=' text-gray-800 text-[16px] sm:text-[1.1rem] pl-1 line-through ml-2'>
          ${props.old_price}
        </div>
      </div>
       <div>
          {props.desc}
        </div>
      </div>
  );
};

export default Ecoshop;


