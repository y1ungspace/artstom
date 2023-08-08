import React from 'react';

// Import Swiper React components
import { Swiper, SwiperSlide} from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/scrollbar';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import required modules
import { EffectCoverflow } from 'swiper';

import swiperSlides2 from '@/app/lib/swiperSlides2';

const arrayOfSlides = swiperSlides2;

const Swiper2 = () => {
  return (
    <>
      <h3
        className='
          lg:text-3xl
          text-2xl
          font-bold
          3md:mt-12
          md:mt-4
          mt-12
          md:pb-4
          pb-8
          pl-12
        '>Примеры работ</h3>
      <Swiper
        effect={"coverflow"}
        slidesPerView={2.5}
        slidesPerGroup={1}
        centeredSlides={true}
        slideToClickedSlide={true}
        loop={true}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 200,
          modifier: 1,
          slideShadows: true,
        }}
        modules={[EffectCoverflow]}
        className="mySwiper md:scale-100 scale-125"
      >
        {arrayOfSlides.map(slide => 
          <SwiperSlide className='group'
          key={slide.url}
          >
          <img
            src={slide.url}
            className="rounded-2xl"
            />
        </SwiperSlide>
          )}
      </Swiper>
    </>
  );
}

export default Swiper2