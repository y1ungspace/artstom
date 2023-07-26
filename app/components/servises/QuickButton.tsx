'use client'

import { IServiceButton } from "@/app/variables/Interfaces"
import Image from "next/image"

const QuickButton: React.FC<IServiceButton> = ({data}) => {
  return(
    <div className="
        group
        min-w-[270px]
        h-[300px]
        bg-base-2/20
        text-center
        rounded-xl
        shadow-md
        cursor-pointer
        transition-all
        duration-300
        hover:shadow-xl
        hover:drop-shadow-xl
        ">
      <Image
        src="https://www.dropbox.com/s/ge6l46jc74loei8/caries.png?raw=1"
        width={220}
        height={210}
        alt=""
        className="mx-auto mt-5 duration-200 group-hover:-translate-y-5 group-hover:scale-110 group-hover: drop-shadow-md"
      />
      <button 
        className="
          w-[250px] 
          h-[50px]
          bg-base-4
          rounded-xl
          text-xs
          font-medium
          uppercase
          duration-300
          group-hover:bg-base-5
          group-hover:text-base-4
        ">
          {data.name}
      </button>
    </div>
  )
}

export default QuickButton