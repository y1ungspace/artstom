'use client'

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import QuickButton from "./QuickButton"

const QuickButtons: React.FC = () => {
  const [isMoving, setIsMoving] = useState(false)
  const [isStart, setIsStart] = useState(true)
  const [isEnd, setIsEnd] = useState(false)

  const buttonsRef = useRef(null);

  useEffect(() => {
    if (!buttonsRef.current) {
      return
    }

    const checkChange = () => {
      const e = buttonsRef.current as unknown as HTMLDivElement
      setIsMoving(true)
      e.scrollLeft === 0 ? setIsStart(true) : setIsStart(false);
      e.scrollWidth - e.scrollLeft < e.offsetWidth ? setIsEnd(true) : setIsEnd(false);
    }

    const stop = () => {
      setIsMoving(false);
    }

    (buttonsRef.current as HTMLDivElement).addEventListener('scroll', checkChange, false);
    (buttonsRef.current as HTMLDivElement).addEventListener('scrollend', stop, false);
    return () => {
      (buttonsRef.current as unknown as HTMLDivElement).addEventListener("scroll", checkChange, false);
      (buttonsRef.current as unknown as HTMLDivElement).addEventListener('scrollend', stop, false);
    };
  }, [])

  return(
    <section className="relative overflow-hidden py-12 mx-10">
      <div className={`no-scrollbar flex gap-6 overflow-scroll rounded-2xl border-black/50 transition-all duration-200 
      ${isStart ? 
        'border-l-0' : 
        'border-l-sm'} 
      ${isEnd ? 
        'border-r-0' : 
        'border-r-sm'}`}
           ref={buttonsRef}
        >
        <QuickButton />
        <QuickButton />
        <QuickButton />
        <QuickButton />
        <QuickButton />
        <QuickButton />
      </div>
      <Image 
        alt=""
        width={30}
        height={30}
        src={'/icons/arrow-circle.svg'}
        className={`absolute left-0 top-14 rotate-180 duration-200 delay-100
          ${isMoving ? 
          '-translate-x-10 scale-50' : 
            isStart ? 
            '-translate-x-10 scale-50' :
            'translate-x-1'
          }`}
        />
      <Image 
        alt=""
        width={30}
        height={30}
        src={'/icons/arrow-circle.svg'}
        className={`absolute right-0 top-14 duration-200 delay-100
          ${isMoving ? 
          'translate-x-10 scale-50' : 
            isEnd ? 
            'translate-x-10 scale-50' :
            '-translate-x-1'
          }`}
        />
    </section>
  )
}

export default QuickButtons