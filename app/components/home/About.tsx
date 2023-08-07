'use client'

import { Inter } from 'next/font/google'
import Image from 'next/image'

const fontInter = Inter({
  subsets: ['cyrillic'],
  weight: ['300', '500', '600'],
})

const About: React.FC = () => {
  return(
    <div className='max-h-[600px]'>
      <div className='flex w-[calc(100%_-_50px)] bg-base-4 mx-auto mt-12 rounded-3xl'>
        <Image 
          className='rounded-3xl lg:w-[400px] w-80'
          src="/images/profile.jpg"
          alt="profile"
          width="400"
          height="100"
          />
        <div className={'flex flex-col gap-5 xl:mt-32 lg:mt-16 mt-8 mx-10 ' + fontInter.className}>
          <div className='2lg:text-4xl lg:text-3xl text-xl font-semibold'>
            <h3 className='opacity-80'>Вот уже 15 лет я занимаюсь любимым делом, </h3>
            <p className='opacity-100'>моя цель – идеальная улыбка.</p>
          </div>
          <p className='lg:text-xl 3md:text-lg text-base opacity-80'> Мы выполним комплексную работу по диагностике состояния височно-нижнечелюстного сустава жевательных мышц, лечению зубов и  протезированию.Наши знания и навыки позволяют восстановить красоту улыбки , здоровую функцию мышц , височно-нижнечелюстного сустава и функциональную анатомию зубов.Мы специализируемся на высокоэстетичном протезировании тонкими накладками и винирами E-max.</p>
          <div className='flex gap-20 xl:mt-14 lg:mt-12 mt-4'>
            <button className='text-base-2 font-medium'>{'Услуги >'}</button>
            <button className='text-base-2 font-medium'>{'Цены >'}</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About