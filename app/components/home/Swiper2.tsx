import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/scrollbar';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import required modules
import { Keyboard, Scrollbar, Navigation, Pagination } from 'swiper';

import swiperSlides2 from '@/app/lib/swiperSlides2';

const arrayOfSlides = swiperSlides2;

const Swiper2: React.FC = () => {

  return (
    <>
      <h3 className='text-3xl font-bold mt-12 pb-4 pl-12'>Примеры работ</h3>
      <Swiper
        slidesPerView={3}
        slidesPerGroup={3}
        loop={true}
        spaceBetween={50}
        speed={500}
        keyboard={{
          enabled: true,
        }}
        navigation={true}
        modules={[Keyboard, Scrollbar, Navigation, Pagination]}
        className="mySwiper customSwiper px-12"
      >
        {arrayOfSlides.map(slide => 
          <SwiperSlide className='group'>
          <img
            src={slide.url}
            className="rounded-2xl duration-100 ease-in-out"
            />
          <p className={
            (slide.progress < 1 ?
              "bg-base-3" :
              slide.progress < 2 ?
                "bg-base-5" :
                "bg-base-2")
            + " group-hover:opacity-80 duration-100 inline px-3 text-sm font-medium text-center rounded-lg text-base-4 translate-y-5 opacity-0 uppercase"
          }
          >{slide.progress < 1 ? "До Лечения" : slide.progress < 2 ? "После Лечения" : "Конечный Результат"}</p>
        </SwiperSlide>
          )}
      </Swiper>
    </>
  );
}

export default Swiper2