import React from 'react';

// Import Swiper React components
import { Swiper, SwiperSlide} from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/scrollbar';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import required modules
import { EffectCoverflow, Navigation } from 'swiper';

import swiperSlides2 from '@/app/lib/swiperSlides2';

const arrayOfSlides = swiperSlides2;

const Swiper2 = () => {
  return (
    <>
      <h3
        className='
          lg:text-3xl
          xs:text-2xl
          text-xl
          font-bold
          3md:mt-12
          md:mt-4
          mt-12
          md:pb-4
          pb-8
          pl-12
        '>Примеры работ</h3>
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
        modules={[Navigation]}
        className="mySwiper customSwiper px-12 md:scale-100 scale-150 md:py-0 py-4"
      >
        {arrayOfSlides.map(slide => 
          <SwiperSlide className='group'
          key={slide.url}
          >
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