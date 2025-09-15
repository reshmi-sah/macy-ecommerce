import React, { useContext } from 'react'
import Econavbar from '../Econavbar';
import { ShopContext } from '../ShopContext'
import Ecoshop from '../Ecoshop';
import Shopsection from '../shopsection';
import Footer from '../Footer';

const ShopCategory = (props) => {
  const { all_product} = useContext(ShopContext);
  const filteredProducts = all_product.filter(item => item.category === props.category);

  return (
    <div>
      <Econavbar />
      <div className='relative top-[90px]  sm:top-[80px]'>
  <div className=' '>
          <img src={props.banner} alt="" className='w-full '/>
  </div>
        <div className='flex flex-col text-center justify-start mt-10'>
         <p className='text-2xl sm:text-4xl text-black font-[500]'>Best Collection</p>
         <hr className='w-32 h-1 sm:h-2 bg-black mx-auto rounded-full'/>
        </div>
        <div className='flex flex-wrap justify-center  gap-2  mt-10 mb-5 place-items-center'>
          {filteredProducts.map((item,i)=>{
            if(props.category === item.category){
             return  <Ecoshop
            key={item.id}
            id={item.id}
            name={item.name}
            image={item.image}
            new_price={item.new_price}
            old_price={item.old_price}
            desc={item.desc}
          />
            }
            else{
              return null;
            }
          })}
        </div>
      </div>
     <div className='mt-28 mb-10  sm:mb-24'> <Shopsection /></div>
               <Footer />
    </div>
  )
}

export default ShopCategory
