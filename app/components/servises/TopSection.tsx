'use client'

import Image from "next/image"
import Logo from "../Logo"

const TopSection: React.FC = () => {
  return(
    <section className='top-background-radius relative scale-110  bg-pastel-1 overflow-hidden'>
    <div className='absolute bottom-[200px] right-[550px] scale-[7] blur-[0.8px] opacity-50'>
      <Logo />
    </div>
    <Image
        className='absolute bottom-0 right-[100px]'
        width="750"
        height="750"
        src="/images/woman-smiling-1.png"
        alt=""
          />
    <div className='flex justify-between scale-90 w-[1248px] py-36 mx-auto'>
      <div className='w-3/6'>
        <h1 className='text-5xl font-medium my-11 w-[95%]'>Услуги</h1>
        <h3 className='text-lg font-normal'>Ничто так не радует стоматолога, как вид вашей обновлённой улыбки. Позвольте себе долгосрочную инвестицию в красоту и здоровье, которая никогда не обесценится, улучшит ваш образ, облегчит общение и принесет много положительных эмоций!</h3>
      </div>
    </div>
  </section>
  )
}

export default TopSection

