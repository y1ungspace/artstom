'use client'

import Image from "next/image"
import Logo from "./Logo"
import { ItopSectionObj } from "../variables/Interfaces"

const TopSection: React.FC<{data: ItopSectionObj}> = ({data}) => {
  return(
    <section className='top-background-radius relative scale-110  bg-pastel-1 overflow-hidden'>
    <div className='absolute bottom-[200px] right-[550px] scale-[7] blur-[0.8px] opacity-50'>
      <Logo />
    </div>
    <Image
        className='absolute top-14 xl:right-[100px] 2lg:right-7 right-0 xl:scale-[1] scale-[0.9]'
        width="800"
        height="800"
        src={data.img}
        alt=""
          />
    <div className='flex justify-between scale-90 xl:w-[1248px] 2lg:w-[1000px] w-[1000px] py-36 mx-auto '>
      <div className='w-1/2'>
        <h1 className='text-5xl font-medium my-11 w-[95%]'>{data.title}</h1>
        <h3 className='text-lg font-normal'>{data.subtitle}</h3>
      </div>
    </div>
  </section>
  )
}

export default TopSection

