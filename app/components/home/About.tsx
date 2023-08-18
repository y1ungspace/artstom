'use client'

import { getAbout } from '@/app/lib/contentful'
import { IAbout } from '@/app/variables/Interfaces'
import { Inter } from 'next/font/google'
import Image from 'next/image'
import { useEffect, useState } from 'react'

const fontInter = Inter({
  subsets: ['cyrillic'],
  weight: ['300', '500', '600'],
})

const About: React.FC = () => {

  const [data, setData] = useState<IAbout | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedData = await getAbout();
        if (fetchedData) 
          setData(fetchedData);
          console.log(fetchedData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    
    fetchData();
  }, []);

  if (!data) {
    return <div></div>;
  }

  return(
    <div className='2md:max-h-[600px]'>
      <div className='flex 2md:flex-row flex-col items-center w-[calc(100%_-_50px)] bg-base-4 mx-auto 2md:mt-12 my-12 rounded-3xl'>
        <Image 
          className='
            rounded-3xl
            lg:w-[400px]
            2md:w-80
            md:w-[400px]
            w-full
            md:h-auto
            sm:h-[600px]
            h-[500px]
            object-cover
            sm:object-top
            2md:mt-0
            md:mt-4'
          src="/images/profile.jpg"
          alt="profile"
          width="400"
          height="100"
          />
        <div className={'flex flex-col gap-5 xl:mt-32 lg:mt-16 sm:mt-8 mt-4 sm:mx-10 mx-4 ' + fontInter.className}>
          <div className='2lg:text-4xl lg:text-3xl 2md:text-xl sm:text-2xl text-xl font-semibold'>
            <h3 className='opacity-80'>{data.title1}</h3>
            <p className='opacity-100'>{data.title2}</p>
          </div>
          <p className='lg:text-xl 3md:text-lg text-base opacity-80'>{data.subtitle}</p>
          <div className='flex 2md:gap-20 gap-12 xl:mt-14 lg:mt-12 2md:mt-4 2md:mb-0 mb-4'>
            <button className='text-base-2 font-medium'>{'Услуги >'}</button>
            <button className='text-base-2 font-medium'>{'Цены >'}</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About