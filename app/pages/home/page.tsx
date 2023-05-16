'use client';

import { Inter } from 'next/font/google'
import Slider from '../../components/home/Slider'
import About from '../../components/home/About'
import Carousel from '../../components/home/Carousel'
import Location from '../../components/home/Location'
import Purposes from '../../components/home/Purposes'
import Block3 from '../../components/home/Block3';

const fontInter = Inter({
  subsets: ["latin"],
  weight: '300'
})

const imagesArray = [
  'https://www.dropbox.com/s/3u5g0h3d6sh86xu/IMG_8851.jpg?raw=1',
  'https://www.dropbox.com/s/k2gppwmyt7bnjpl/IMG_8835.jpg?raw=1',
  'https://www.dropbox.com/s/t1qpiys4f86v8jf/IMG_8822.jpg?raw=1',
]

export default function Home() {
  return (
    <>
      <section className='bg-background bg-cover h-[1000px]'>
        <div className={fontInter.className + ' flex justify-between  w-[1248px] py-36 mx-auto'}>
          <div className='w-2/5'>
            <h1 className='text-5xl font-medium my-11'>Ваша улыбка заслуживает внимания</h1>
            <h3 className='text-xl'>Не что так не радует стоматолога, как вид вашей обновлненной улыбки. Позвольте себе долгосрочную инвестицию в красоту и здоровье которая никогда не обесценится, улучшит ваш образ, облегчит общение и принесет много положительных эмоций!</h3>
          </div>
          <Slider />
        </div>
      </section>
      <About />
      <Block3 />
      <div className='flex w-[calc(100%_-_50px)] mt-10 mx-auto rounded-3xl'>
        <div className='flex flex-col justify-center pl-20'>
          <h1 className='text-4xl font-bold'>Title</h1>
          <h3 className='font-medium'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, non dolores, harum beatae, aspernatur tempore facere dignissimos atque velit dolore mollitia? Optio quibusdam mollitia modi quia accusamus dignissimos voluptatibus sed?</h3>
        </div>
        <Carousel width={700} height={500} images={imagesArray} />
      </div>
      <Location />
      <Purposes />
    </>
  )
} 
