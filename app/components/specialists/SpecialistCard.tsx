'use client'

import Image from 'next/image'

const SpecialistCard: React.FC = () => {
  return(
    <div className="flex w-[800px] min-y-[100px] gap-8 about-center rounded-3xl p-1">
      <Image 
          className='rounded-3xl'
          src="/images/profile.jpg"
          alt="profile"
          width="300"
          height="100"
          />
      <div className='text-left'>
        <h3 className="text-2xl font-bold py-5">Фамилия Имя Отчество</h3>
        <h3 className="text-md font-medium opacity-90 pb-8">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum molestiae vitae unde, quidem ipsa rerum fugit repellat quasi fuga ex dolore adipisci praesentium deserunt soluta laboriosam voluptas at tenetur vero!</h3>
        <h3 className="text-md font-medium opacity-90">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum molestiae vitae unde, quidem ipsa rerum fugit repellat quasi fuga ex dolore adipisci praesentium deserunt soluta laboriosam voluptas at tenetur vero!</h3>
      </div>
    </div>
  )
}

export default SpecialistCard