import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";

import Slider1 from "../ecommerce/ecommerce_images/macyscroll1.jpeg";
import Slider2 from "../ecommerce/ecommerce_images/macyscroll2.jpeg";
import Slider3 from "../ecommerce/ecommerce_images/macyscroll3.jpeg";
import Slider4 from "../ecommerce/ecommerce_images/macyscroll4.jpeg";
import Slider5 from "../ecommerce/ecommerce_images/macyscroll5.jpeg";
import Slider6 from "../ecommerce/ecommerce_images/macyscroll6.jpeg";
import Slider7 from "../ecommerce/ecommerce_images/macyscroll7.jpeg";
import Slider8 from "../ecommerce/ecommerce_images/macyscroll8.jpeg";

const Scrollbar = () => {
  const slides = [
    { title: "Guardians Of The Galaxy", img: Slider1 },
    { title: "Avengers Endgame", img: Slider2 },
    { title: "Batman", img: Slider3 },
    { title: "Superman", img: Slider4 },
    { title: "Iron ", img: Slider5 },
    { title: "Iron Man", img: Slider6 },
    { title: "Iron Man", img: Slider7 },
    { title: "Iron Man", img: Slider8 },
  ];

  return (
    <div className="ml-2 mr-2 mt-5 sm:mt-24 mb-5 sm:mb-24">
      <div className="w-full py-10">
        <Swiper
        
          effect={"coverflow"}
          grabCursor={true}
          loop={true}
          centeredSlides={true}
          slidesPerView={3}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 200,
            modifier: 1.8,
            slideShadows: false,
          }}
          navigation
          modules={[EffectCoverflow, Navigation]}
          className="mySwiper"
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="relative">
                <img
                  src={slide.img}
                  alt={slide.title}
                  className="rounded-lg shadow-lg bg-cover w-full h-[100px] sm:h-[300px] transition-all duration-300"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <style>
          {`
            /* Make active slide bigger */
            .swiper-slide-active img {
              // transform: scale(1.3);
              opacity: 1 !important;
            }
            /* Side slides smaller + dull */
            .swiper-slide img {
              opacity: 0.5;
              transition: all 0.3s ease;
              background: black;
            }
            /* Hide pagination dots */
            // .swiper-pagination {
            //   display: none !important;
            // }

            /* Red navigation buttons */
            .swiper-button-next,
            .swiper-button-prev {
             background: linear-gradient(to right, #38bdf8, #ec4899); !important;
              color: black !important;
              padding: 15px;
              border-radius: 50%;
              width: 35px;
              height: 35px;
            }
               .swiper-button-next:hover,
            .swiper-button-prev:hover {
             background: linear-gradient(to right, #0ea5e9, #f472b6);
            }
            /* Adjust arrow size */
            .swiper-button-next::after,
            .swiper-button-prev::after {
              font-size: 16px !important;
              font-weight: bold;
            }
          `}
        </style>
      </div>
    </div>
  );
};

export default Scrollbar;
