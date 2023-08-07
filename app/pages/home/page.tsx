'use client';

import { Inter } from 'next/font/google'
import Slider from '../../components/home/Slider'
import About from '../../components/home/About'
import Carousel from '../../components/home/Carousel'
import Location from '../../components/home/Location'
import Purposes from '../../components/home/Purposes'
import Block3 from '../../components/home/Block3';
import Logo from '@/app/components/Logo';
import Image from 'next/image'
import SwiperSlider from '@/app/components/home/Swiper';
import Swiper2 from '@/app/components/home/Swiper2';
import TopSection from '@/app/components/TopSection';
import Block3Small from '@/app/components/home/Block3Small';

const topSectionObj = {
  img: '/images/woman-smiling-6.png',
  title: 'Ваша улыбка заслуживает внимания',
  subtitle: 'Ничто так не радует стоматолога, как вид вашей обновлённой улыбки. Позвольте себе долгосрочную инвестицию в красоту и здоровье, которая никогда не обесценится, улучшит ваш образ, облегчит общение и принесет много положительных эмоций!',
}

export default function Home() {
  return (
    <>
      <TopSection data={topSectionObj} />
      <Swiper2 />
      <About />
      {
      window.screen.width > 820 ?
        <Block3 /> :
        <Block3Small />
      }
      <Purposes />
      <SwiperSlider />
      <Location />
    </>
  )
} 
