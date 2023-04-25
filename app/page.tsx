import { Inter } from 'next/font/google'
import Slider from './components/home/Slider'
import About from './components/home/About'

const fontInter = Inter({
  subsets: ["latin"],
  weight: '300'
})

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
    </>
  )
}
