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
          <h1 className="text-xl font-medium py-2">{props.title}</h1>
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
        px-8
        py-12
        my-4
        bg-base-4
      ">
      <h1 className="lg:text-3xl text-2xl pb-8 font-medium">Ещё {purposes.length} причин по которым стоит к нам обратиться</h1>
      <div className="grid grid-cols-2 gap-6">
        {purposes}
      </div>
    </div>
  )
}

export default Purposes

