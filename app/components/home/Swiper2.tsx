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
      <h3 className='text-3xl font-bold mt-12 pb-4 pl-12'>Примеры работ</h3>
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
        className="mySwiper"
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