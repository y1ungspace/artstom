import Image from 'next/image'
import { Inter } from 'next/font/google'
import Slider from './components/home/Slider'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
   <>
   <h1 className='text-3xl'>Ваша Улыбка заслуживает внимания</h1>
   <h3 className='text-xl'>Вот уже 15 лет я занимаюсь любимым делом, моя цель – идеальная улыбка. 
    Наши навыки позволяют востановить красоту улыбки (gjnjv hfp,the x\ nfv lfkmit)</h3>
    <Slider />
   </>
  )
}
