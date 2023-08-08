'use client'

import { Inter } from 'next/font/google'
import Image from 'next/image'

const fontInter = Inter({
  subsets: ['cyrillic'],
  weight: ['300', '500', '600'],
})

const About: React.FC = () => {
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
            h-[600px]
            object-cover
            object-top
            2md:mt-0
            md:mt-4'
          src="/images/profile.jpg"
          alt="profile"
          width="400"
          height="100"
          />
        <div className={'flex flex-col gap-5 xl:mt-32 lg:mt-16 mt-8 mx-10 ' + fontInter.className}>
          <div className='2lg:text-4xl lg:text-3xl 2md:text-xl text-2xl font-semibold'>
            <h3 className='opacity-80'>Вот уже 15 лет я занимаюсь любимым делом, </h3>
            <p className='opacity-100'>моя цель – идеальная улыбка.</p>
          </div>
          <p className='lg:text-xl 3md:text-lg text-base opacity-80'> Мы выполним комплексную работу по диагностике состояния височно-нижнечелюстного сустава жевательных мышц, лечению зубов и  протезированию.Наши знания и навыки позволяют восстановить красоту улыбки , здоровую функцию мышц , височно-нижнечелюстного сустава и функциональную анатомию зубов.Мы специализируемся на высокоэстетичном протезировании тонкими накладками и винирами E-max.</p>
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