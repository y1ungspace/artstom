'use client';

import ServiceCard from '../../components/services/ServiceCard'

export default function Services() {
  return (
    <section className='text-center w-[calc(100%_-_50px)] mx-auto bg-servises bg-top mt-[58px]'>
      <h1 className='text-5xl pt-24 font-bold'>Услуги</h1>
      <h3 className='w-[700px] mx-auto pt-2 font-medium opacity-90'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita ipsam laudantium nesciunt rerum doloremque dolore perspiciatis omnis beatae accusamus hic possimus enim placeat, quos optio ducimus? Totam illo amet dolor?</h3>
      <div className='grid grid-cols-4 mt-16 justify-items-center gap-4 w-[1328px] mx-auto'>
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
      </div>
    </section>
  )
} 
