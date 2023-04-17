import Image from 'next/image'
import { Inter } from 'next/font/google'
import Slider from './components/home/Slider'

const fontInter = Inter({
  subsets: ["latin"],
  weight: '300'
})

export default function Home() {
  return (
    <section className='bg-background bg-cover h-[1000px]'>
      <div className={fontInter.className + ' flex justify-between  w-[1248px] py-24 mx-auto'}>
        <div className='w-2/5'>
          <h1 className='text-5xl my-11'>Ваша улыбка заслуживает внимания</h1>
          <h3 className='text-xl'>Вот уже 15 лет я занимаюсь любимым делом, моя цель – идеальная улыбка. 
            Наши навыки позволяют востановить красоту улыбки и здоровую функцию зубо-челюстной системы.</h3>
        </div>
        <Slider />
      </div>
    </section>
  )
}
