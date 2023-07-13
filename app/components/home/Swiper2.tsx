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

const arrayOfSlides = [
  {
    url: "https://www.dropbox.com/s/g6ej9a6az96jw71/Example5.jpg?raw=1",
    progress: 0,
  },
  {
    url: "https://www.dropbox.com/s/babf0aak90im5si/Example8.jpg?raw=1",
    progress: 1,
  },
  {
    url: "https://www.dropbox.com/s/b8sfvabi2p9mgf0/Example1.jpg?raw=1",
    progress: 2,
  },
  {
    url: "https://www.dropbox.com/s/wrx1fpyf5oehqf3/Example6.jpg?raw=1",
    progress: 0,
  },
  {
    url: "https://www.dropbox.com/s/wytcc1ph3vxo5r8/Example4.jpg?raw=1",
    progress: 1,
  },
  {
    url: "https://www.dropbox.com/s/x3yqwtcfo13b4n2/Example7.jpg?raw=1",
    progress: 2,
  },
  {
    url: "https://www.dropbox.com/s/y8qa70khc28as1a/11%20copie.jpg?raw=1",
    progress: 0,
  },
  {
    url: "https://www.dropbox.com/s/1xe1znm16ptif2w/Example2.jpg?raw=1",
    progress: 1,
  },
  {
    url: "https://www.dropbox.com/s/m1cwuo836kw90si/Example3.jpg?raw=1",
    progress: 2,
  },
]

const Swiper2: React.FC = () => {

  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const handleSlideHover = (index: number | null) => {
    setHoveredIndex(index);
  };

  return (
    <>
      <Swiper
        style={{padding: 50}}
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
        className="mySwiper customSwiper"
      >
        {arrayOfSlides.map(slide => 
          <SwiperSlide className='group'>
          <img
            src={slide.url}
            className="rounded-2xl duration-100 ease-in-out"
            onMouseEnter={() => handleSlideHover(1)}
            onMouseLeave={() => handleSlideHover(null)}
            />
          <p className={(slide.progress < 1 ? "bg-base-3" : slide.progress < 2 ? "bg-base-5" : "bg-base-2") + " group-hover:opacity-80 duration-100 inline px-3 text-sm font-medium text-center rounded-lg text-base-4 translate-y-5 opacity-0 uppercase"}
            // group-hover:opacity-80
            // duration-100
            // inline
            // px-3
            // text-sm
            // font-medium
            // text-center
            // rounded-lg
            // text-base-4
            // translate-y-5
            // opacity-0
            // uppercase'
          >{slide.progress < 1 ? "До Лечения" : slide.progress < 2 ? "После Лечения" : "Конечный Результат"}</p>
        </SwiperSlide>
          )}
        {/* <SwiperSlide className='group'>
          <img
            src="https://www.dropbox.com/s/g6ej9a6az96jw71/Example5.jpg?raw=1"
            className="rounded-2xl duration-100 ease-in-out"
            onMouseEnter={() => handleSlideHover(1)}
            onMouseLeave={() => handleSlideHover(null)}
            />
          <p className='
            group-hover:opacity-80
            duration-100
            inline
            px-3
            text-sm
            font-medium
            text-center
            bg-base-3
            rounded-lg
            text-base-4
            translate-y-5
            opacity-0
            uppercase'
          >До лечения</p>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://www.dropbox.com/s/babf0aak90im5si/Example8.jpg?raw=1"
            className="rounded-2xl"
            />
          <p className='text-sm font-medium text-center translate-y-5 opacity-80 uppercase'>После Лечения</p>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://www.dropbox.com/s/b8sfvabi2p9mgf0/Example1.jpg?raw=1"
            className="rounded-2xl"
            />
          <p className='text-sm font-medium text-center translate-y-5 opacity-80 uppercase'>Конечный Результат</p>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://www.dropbox.com/s/wrx1fpyf5oehqf3/Example6.jpg?raw=1"
            className="rounded-2xl"
            />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://www.dropbox.com/s/wytcc1ph3vxo5r8/Example4.jpg?raw=1"
            className="rounded-2xl"
            />
        </SwiperSlide>
        <SwiperSlide>
          <img 
            src="https://www.dropbox.com/s/x3yqwtcfo13b4n2/Example7.jpg?raw=1"
            className="rounded-2xl"
            />
        </SwiperSlide>
        <SwiperSlide>
          <img 
            src="https://www.dropbox.com/s/y8qa70khc28as1a/11%20copie.jpg?raw=1"
            className="rounded-2xl"
            />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://www.dropbox.com/s/1xe1znm16ptif2w/Example2.jpg?raw=1"
            className="rounded-2xl"
            />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://www.dropbox.com/s/m1cwuo836kw90si/Example3.jpg?raw=1"
            className="rounded-2xl"
            />
        </SwiperSlide> */}
      </Swiper>
    </>
  );
}

export default Swiper2