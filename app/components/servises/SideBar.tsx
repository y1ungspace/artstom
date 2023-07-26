'use client'

import { IServiceDataWrapper } from "@/app/variables/Interfaces";
import { useEffect, useRef, useState } from "react"

const Sidebar: React.FC<IServiceDataWrapper> = ({data}) => {
const [topPosition, setTopPosition] = useState(0);
const [isBellowY, setIsBellowY] = useState(false)

const sidebarRef = useRef(null);

useEffect(() => {
  if (!sidebarRef.current) {
    return
  }
  const newPosition = (sidebarRef.current as HTMLElement).offsetTop - 90 - 40;
  setTopPosition(newPosition)

  const onScroll = () => {
    const windowPosition = window.pageYOffset
    windowPosition > newPosition ? setIsBellowY(true) : setIsBellowY(false)
  }

  window.addEventListener('scroll', onScroll, false)
  return () => {
    window.addEventListener("scroll", onScroll, false);
  };
}, [])

  return(
    <section className="min-w-[270px]"
      ref={sidebarRef}
      >
      <div className={
        `flex flex-col gap-2 min-w-[270px] max-w-[270px] h-fit bg-base-4 rounded-2xl shadow-md p-6 transition-all duration-200 
          ${isBellowY ?
          ' fixed top-32 scale-105 rounded-xl' :
          ''
        }`}>
        <h1 className='text-2xl font-md mb-5 text-left text-base-1'>Услуги</h1>
        {data.map((e) =>  <button className="text-base font-medium text-left text-base-1/60 pl-2">{e.sidebar.name}</button>)}
      </div>
    </section>
  )
}

export default Sidebar