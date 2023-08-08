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

import swiperSlides from "@/app/lib/swiperSlides";

const arrOfSlides = swiperSlides

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
        className="mySwiper md:scale-100 scale-150 md:py-0 py-4"
      >
        {arrOfSlides.map((slide) =>
          <SwiperSlide>
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

export default SwiperSlider