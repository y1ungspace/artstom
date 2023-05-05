'use client'

import { Inter } from 'next/font/google'
import Slider from './components/home/Slider'
import About from './components/home/About'
import Carousel from './components/home/Carousel'

const fontInter = Inter({
  subsets: ["latin"],
  weight: '300'
})

const imagesArray = [
  'https://www.dropbox.com/s/3u5g0h3d6sh86xu/IMG_8851.jpg?raw=1',
  'https://www.dropbox.com/s/k2gppwmyt7bnjpl/IMG_8835.jpg?raw=1',
  'https://www.dropbox.com/s/t1qpiys4f86v8jf/IMG_8822.jpg?raw=1',
]

const width = window.screen.width;

export default function Home() {
  return (
    <>
      <section className='bg-background bg-cover h-[1000px]'>
        <div className={fontInter.className + ' flex justify-between  w-[1248px] py-36 mx-auto'}>
          <div className='w-2/5'>
            <h1 className='text-5xl my-11'>Ваша улыбка заслуживает внимания</h1>
            <h3 className='text-xl'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta expedita ab magni vero voluptatum quas natus alias dolorum minima, cumque placeat itaque aliquid omnis.</h3>
          </div>
          <Slider />
        </div>
      </section>
      <About />
      <div className='flex w-[calc(100%_-_50px)] mt-10 mx-auto bg-red-100 rounded-3xl'>
        <Carousel width={width} height={500} images={imagesArray} />
      </div>
    </>
  )
} 
