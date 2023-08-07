'use client'

import Image from "next/image"
import Logo from "./Logo"
import { ItopSectionObj } from "../variables/Interfaces"

const TopSection: React.FC<{data: ItopSectionObj}> = ({data}) => {
  return(
    <section className='top-background-radius relative scale-110  bg-pastel-1 overflow-hidden'>
    <div className='absolute 3md:bottom-[200px] bottom-40 lg:right-[550px] right-[300px] 3md:scale-[7] scale-[5] blur-[0.8px] opacity-50'>
      <Logo />
    </div>
    <Image
        className='
          absolute
          lg:top-14 
          3md:top-0
          -top-16
          xl:right-[100px]
          2lg:right-7
          lg-right-0
          3md:-right-20
          -right-40
          xl:scale-[1]
          lg:scale-[0.9]
          3md:scale-[0.8]
          scale-[0.7]'
        width="800"
        height="800"
        src={data.img}
        alt=""
          />
    <div 
      className='
        flex
        justify-between
        scale-90
        xl:w-[1248px]
        2lg:w-[1000px]
        lg:w-[1000px]
        w-[900px]
        lg:py-36
        3md:py-24
        py-16
        mx-auto
        '>
      <div className='w-1/2'>
        <h1 className='lg:text-5xl text-4xl font-medium 3md:my-11 mt-10 my-6 w-[95%]'>{data.title}</h1>
        <h3 className='3md:text-lg 3md:pb-0 pb-4 text-base font-normal'>{data.subtitle}</h3>
      </div>
    </div>
  </section>
  )
}

export default TopSection

