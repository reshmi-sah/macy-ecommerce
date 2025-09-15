import React from 'react'
import herosec from '../ecommerce/ecommerce_images/hero.jpg';
import herosec8 from '../ecommerce/ecommerce_images/heroimage2.jpg';
import herosec1 from '../ecommerce/ecommerce_images/macyherosection1.jpg';


import { Pagination, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';


const Ecohome = () => {
  return (
    <>
      <div className='relative top-[80px] '>
        <div className='  w-full h-auto '>
          <Swiper
      pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            modules={[Pagination, Autoplay]}
            loop={true}
            speed={1500} 
            autoplay={{ delay: 2000 }}
            className="mySwiper"
          >
            
 <SwiperSlide>
  <div className="w-full h-[200px] sm:h-[500px]">
    <img
      src={herosec}
      alt="heroimage"
      className="w-full h-full object-cover [mask-image:linear-gradient(to_bottom,black,transparent)]"
    />
  </div>
</SwiperSlide>

<SwiperSlide>
  <div className="w-full h-[200px] sm:h-[500px]">
    <img
      src={herosec1}
      alt="heroimage"
      className="w-full h-full object-cover [mask-image:linear-gradient(to_bottom,black,transparent)]"
    />
  </div>
</SwiperSlide>

<SwiperSlide>
  <div className="w-full h-[200px] sm:h-[500px]">
    <img
      src={herosec8}
      alt="heroimage"
      className="w-full h-full object-cover [mask-image:linear-gradient(to_bottom,rgba(0,0,0,1)_30%,rgba(0,0,0,0)_100%)]"
    />
  </div>
</SwiperSlide>
          </Swiper>
        </div>
      </div>
      
    </>
  )
}

export default Ecohome


