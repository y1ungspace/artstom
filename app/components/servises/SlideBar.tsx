'use client'

import { useEffect, useRef, useState } from "react"

const Slidebar: React.FC = () => {
const [topPosition, setTopPosition] = useState(0);
const [isBellowY, setIsBellowY] = useState(false)

const slidebarRef = useRef(null);

useEffect(() => {
  if (!slidebarRef.current) {
    return
  }
  const newPosition = (slidebarRef.current as HTMLElement).offsetTop - 90 - 40;
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
      ref={slidebarRef}
      >
      <div className={`flex flex-col gap-2 min-w-[270px] h-fit bg-base-4 rounded-2xl shadow-md p-6 transition-all duration-100 ${isBellowY ? ' fixed top-32' : ''}`}>
        <h1 className='text-2xl font-md mb-5 text-left text-base-1'>Услуги</h1>
        <button className="text-base font-medium text-left text-base-1/60 pl-2">Лечение Кариеса</button>
        <button className="text-base font-medium text-left text-base-1/60 pl-2">Лечение Кариеса</button>
        <button className="text-base font-medium text-left text-base-1/60 pl-2">Лечение Кариеса</button>
        <button className="text-base font-medium text-left text-base-1/60 pl-2">Лечение Кариеса</button>
      </div>
    </section>
  )
}

export default Slidebar