'use client'

import Image from "next/image"
import Logo from "./Logo"
import { getItems } from "../lib/contentful"
import { useEffect, useState } from "react"
import { ItopSectionObj } from "../variables/Interfaces"

const TopSection: React.FC<{url: string}> = ({url}) => {

  const [data, setData] = useState<ItopSectionObj | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedData = await getItems(url);
        console.log(fetchData)
        if (fetchedData) 
          setData(fetchedData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    
    fetchData();
  }, [url]);

  if (!data) {
    return <div></div>;
  }

  return(
    <section
      className='
        top-background-radius
        relative
        flex
        flex-col-reverse
        items-center
        scale-110 
        md:p-0
        md:w-auto
        w-[1000px]
        md:left-0
        left-1/2
        md:ml-0
        ml-[-500px]
        bg-pastel-1
        overflow-hidden
      '>
    <div
      className='
        absolute
        3md:bottom-[200px]
        md:bottom-40
        bottom-60
        lg:right-[550px]
        md:right-[300px]
        right-[500px]
        3md:scale-[7]
        scale-[5]
        blur-[0.8px]
        opacity-50
      '>
      <Logo />
    </div>
    <Image
        className='
          md:absolute
          block
          lg:top-20 
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
          md:scale-[0.7]
          scale-[1]
          md:w-[800px]
          w-[300px]
          2sm:max-h-fit
          max-h-[300px]
          object-cover
          object-top'
        width="800"
        height="800"
        src={`/images/woman-smiling-${data.url}.png`}
        alt=""
          />
    <div 
      className='
        flex
        justify-between
        md:text-left
        text-center
        md:scale-90
        xl:w-[1248px]
        2lg:w-[1000px]
        lg:w-[1000px]
        md:w-[900px]
        w-[500px]
        lg:py-36
        3md:py-24
        md:py-16
        mx-auto
        '>
      <div className='md:w-1/2'>
        <h1
          className='
            lg:text-5xl
            sm:text-4xl
            text-3xl
            2sm:font-medium
            3md:my-11
            md:mt-10
            mt-32
            my-6
            md:p-0
            sm:px-10
            xs:px-16
            px-24
            md:w-[95%]
          '>
            {data.title}
          </h1>
        <h3
          className='
            3md:text-lg
            3md:pb-0
            pb-4
            2sm:px-0
            sm:px-10
            xs:px-20
            px-24
            md:text-base
            text-sm
            font-normal
          '>
            {data.subtitle}
          </h3>
      </div>
    </div>
  </section>
  )
}

export default TopSection

