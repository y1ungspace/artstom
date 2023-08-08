'use client'

import purposesArray from "@/app/lib/purposes"
import { IPurpose } from "@/app/variables/Interfaces"
import Image from "next/image"

const Purposes: React.FC = () => {

  const Purpose: React.FC<IPurpose> = (props) => {
    return(
      <div className="flex items-start gap-3">
        <Image 
          src="/icons/icon-teeth.svg" 
          alt=""
          width={40}
          height={40}
          className="lg:w-10 lg:pt-0 pt-2 w-7"
        />
        <div>
          <h1 className="2md:text-xl text-lg font-medium py-2">{props.title}</h1>
          <p className="text-sm opacity-80">{props.description}</p>
        </div>
      </div>
    )
  }

  const purposes = purposesArray.map((purpose) => (
    <Purpose title={purpose.title} description={purpose.description} />
  ))
 
  return(   
    <div
      className="
        w-[calc(100%_-_50px)]
        mx-auto
        rounded-3xl
        xl:px-32
        2lg:px-24
        lg:px-16
        3md:px-8
        px-4
        2md:py-12
        py-4
        2md:my-4
        md: my-0
        mb-8
        bg-base-4
      ">
      <h1
        className="
          lg:text-3xl
          text-2xl
          2md:text-left
          text-center
          2md:pb-8
          py-4
          font-medium
        ">Ещё {purposes.length} причин по которым стоит к нам обратиться</h1>
      <div className="grid md:grid-cols-2 grid-cols-1 3md:gap-6 gap-2">
        {purposes}
      </div>
    </div>
  )
}

export default Purposes

