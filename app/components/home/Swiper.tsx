'use client'

import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import "./styles.css";

// import required modules
import { EffectCoverflow, Pagination } from "swiper";

const SwiperSlider = () => {
  return (
    <>
      <Swiper
        effect={"coverflow"}
        centeredSlides={true}
        slideToClickedSlide={true}
        loop={true}
        slidesPerView={2.5}
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
        <SwiperSlide>
          <img 
            src="https://www.dropbox.com/s/3u5g0h3d6sh86xu/IMG_8851.jpg?raw=1" 
            className="rounded-2xl"
            />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://www.dropbox.com/s/k2gppwmyt7bnjpl/IMG_8835.jpg?raw=1"
          className="rounded-2xl"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://www.dropbox.com/s/t1qpiys4f86v8jf/IMG_8822.jpg?raw=1"
          className="rounded-2xl"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://www.dropbox.com/s/dso3k1l0ttnmc02/IMG_8829.jpg?raw=1"
          className="rounded-2xl"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://www.dropbox.com/s/dso3k1l0ttnmc02/IMG_8829.jpg?raw=1"
          className="rounded-2xl"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://www.dropbox.com/s/dso3k1l0ttnmc02/IMG_8829.jpg?raw=1"
          className="rounded-2xl"
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export default SwiperSlider