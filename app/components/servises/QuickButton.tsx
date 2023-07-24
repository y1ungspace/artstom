'use client'

import Image from "next/image"

const QuickButton: React.FC = () => {
  return(
    <div className="
        group
        w-[270px]
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
        className="mx-auto"
      />
      <button className="w-[250px] h-[50px] bg-base-4 rounded-xl mt-5 text-xs font-medium uppercase duration-300 group-hover:bg-base-5 group-hover:text-base-4">Лечение Кариеса</button>
    </div>
  )
}

export default QuickButton