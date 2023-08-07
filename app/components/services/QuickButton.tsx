'use client'

import { IServiceButton } from "@/app/variables/Interfaces"
import Image from "next/image"

const QuickButton: React.FC<IServiceButton> = ({data}) => {
  return(
    <div className={`
          group
          min-w-[270px]
          h-[300px]
          rounded-xl
          shadow-md
          cursor-pointer
          transition-all
          duration-300
          hover:shadow-xl
          hover:drop-shadow-xl
          ${data.id % 5 === 0 ? 
            'bg-element-5/20' : 
            data.id % 4 === 0 ? 
            'bg-element-4/20' : 
            data.id % 3 === 0 ? 
            'bg-element-3/20' :
            data.id % 2 === 0 ? 
            'bg-element-2/20' : 
            'bg-element-1/20'
          }`
          }>
      <img
        src="https://www.dropbox.com/s/ge6l46jc74loei8/caries.png?raw=1"
        width={220}
        height={210}
        alt=""
        className="mx-auto mt-5 duration-200 group-hover:-translate-y-5 group-hover:scale-110 group-hover: drop-shadow-md"
      />
      <a
        href={`#box-${data.id}`}
        className="
          flex
          justify-center
          items-center
          w-[250px] 
          h-[50px]
          bg-base-4
          rounded-xl
          text-xs
          text-center
          font-medium
          mx-auto
          uppercase
          duration-300
          group-hover:bg-base-5
          group-hover:text-base-4
        ">
          {data.button.name}
      </a>
    </div>
  )
}

export default QuickButton