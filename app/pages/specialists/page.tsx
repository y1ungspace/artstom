'use client';

import SpecialistCard from "@/app/components/specialists/SpecialistCard";

export default function Specialists() {
  return (
    <section className='text-center w-[calc(100%_-_50px)] mx-auto bg-servises bg-top mt-[58px] bg-no-repeat'>
    <h1 className='text-5xl pt-24 font-bold'>Специалисты</h1>
    <h3 className='w-[700px] mx-auto pt-2 font-medium opacity-90'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita ipsam laudantium nesciunt rerum doloremque dolore perspiciatis omnis beatae accusamus hic possimus enim placeat, quos optio ducimus? Totam illo amet dolor?</h3>
    <div className="flex flex-col items-center gap-8 mt-16">
      <SpecialistCard />
      <SpecialistCard />
      <SpecialistCard />
    </div>
  </section>
  )
} 
