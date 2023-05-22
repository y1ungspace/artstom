'use client'

import { Inter } from 'next/font/google'
import Image from 'next/image'

const fontInter = Inter({
  subsets: ['cyrillic'],
  weight: ['300', '500', '600'],
})

const About: React.FC = () => {
  return(
    <div className='about -mt-72 h-[600px]'>
      <div className='about-center flex w-[calc(100%_-_50px)] mt-16 mx-auto rounded-3xl p-1'>
        <Image 
          className='rounded-3xl'
          src="/images/profile.jpg"
          alt="profile"
          width="400"
          height="100"
          />
        <div className={'flex flex-col gap-5 mt-32 mx-10 ' + fontInter.className}>
          <div className='text-4xl font-semibold'>
            <h3 className='opacity-80'>Вот уже 15 лет я занимаюсь любимым делом, </h3>
            <p className='opacity-100'>моя цель – идеальная улыбка.</p>
          </div>
          <p className='text-xl font-medium opacity-80'> Мы выполним комплексную работу по диагностике состояния височно-нижнечелюстного сустава жевательных мышц, лечению зубов и  протезированию.Наши знания и навыки позволяют восстановить красоту улыбки , здоровую функцию мышц , височно-нижнечелюстного сустава и функциональную анатомию зубов.Мы специализируемся на высокоэстетичном протезировании тонкими накладками и винирами E-max.</p>
          <div className='flex gap-20 mt-20 font-thin'>
            <button className='text-base-2 font-light' style={{fontWeight: 300}}>{'Услуги >'}</button>
            <button className='text-base-2 font-light' style={{fontWeight: 300}}>{'Цены >'}</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About