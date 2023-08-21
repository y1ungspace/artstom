'use client';

import About from '../../components/home/About'
import Location from '../../components/home/Location'
import Purposes from '../../components/home/Purposes'
import Block3 from '../../components/home/Block3';
import SwiperSlider from '@/app/components/home/Swiper';
import Swiper2 from '@/app/components/home/Swiper2';
import TopSection from '@/app/components/TopSection';
import Block3Small from '@/app/components/home/Block3Small';
import { useEffect, useState } from 'react';

export default function Home() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    setIsMobile(
      window.screen.width > 820 ?
        false :
        true
      )
    
  })

  return (
    <>
      <TopSection url={'home'} />
      <Swiper2 />
      <About />
      {
        isMobile ?
          <Block3Small /> :
          <Block3 /> 
      }
      <Purposes />
      <SwiperSlider />
      <Location />
    </>
  )
} 
