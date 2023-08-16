'use client'

import { IServiceDataWrapper } from "@/app/variables/Interfaces";
import { useEffect, useRef, useState } from "react"

const Sidebar: React.FC<IServiceDataWrapper> = ({data}) => {
const [topPosition, setTopPosition] = useState(0);
const [isBellowY, setIsBellowY] = useState(false);
const [isBellowLastBox, setIsBellowLastBox] = useState(false);
const [currentBox, setCurrentBox] = useState(0);

const sidebarRef = useRef(null);

useEffect(() => {
  if (!sidebarRef.current) {
    return
  }
  const newPosition = (sidebarRef.current as HTMLElement).offsetTop + 400 + 40;
  setTopPosition(newPosition)

  const blockPositions =  data.map((e) => {
    const block = document.getElementById(`box-${e.id}`)
    if (!block) {
      return
    }
    return block.offsetTop - 500;
  })

  const onScroll = () => {
    const windowPosition = window.pageYOffset
    const lastBox = document.documentElement.scrollHeight - window.outerHeight - window.pageYOffset
    windowPosition > newPosition ? setIsBellowY(true) : setIsBellowY(false);
    lastBox! < 235 ? setIsBellowLastBox(true) : setIsBellowLastBox(false)
    
    for (let i = 0; i < blockPositions.length; i++) {
      if (windowPosition > blockPositions[i]! && 
        windowPosition < blockPositions[i + 1]!
        ) {
          return setCurrentBox(i + 1)
        }
        setCurrentBox(0)
      }
      if (windowPosition > blockPositions[blockPositions.length - 1]!) {
        return setCurrentBox(blockPositions.length);
      }
  }

  window.addEventListener('scroll', onScroll, false)
  return () => {
    window.addEventListener('scroll', onScroll, false)
  };
}, [])

  return(
    <section className="relative min-w-[270px]"
      ref={sidebarRef}
      >
      <div className={
        `flex flex-col gap-2 min-w-[270px] max-w-[270px] h-fit bg-base-4 rounded-2xl shadow-md p-6 transition-all duration-200 
          ${isBellowLastBox ? 
            'absolute bottom-24 scale-105 rounded-xl' :
            ''
          }
          ${isBellowY && !isBellowLastBox ?
          ' fixed top-32 scale-105 rounded-xl' :
          ''
        }`}>
        <h1 className='text-2xl font-md mb-5 text-left text-base-1'>Услуги</h1>
        {data.map((e) =>  
          <a 
            className={`
              text-base
              font-medium
              text-left
              pl-2
              transition-all
              duration-75
              cursor-pointer
              hover:scale-[1.008]
              ${
                currentBox === e.id ? 
                  ' text-base-2 animate-pop' :
                  ' text-base-1/60'
                }
              `}
            key={e.id}
            href={`#box-${e.id}`}
        >
          {e.sidebar.name}
        </a>)}
      </div>
    </section>
  )
}

export default Sidebar