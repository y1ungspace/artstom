'use client'

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import QuickButton from "./QuickButton"
import { IServiceDataWrapper } from "@/app/variables/Interfaces"

const QuickButtons: React.FC<IServiceDataWrapper> = ({data}) => {
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
      e.scrollWidth - e.scrollLeft - 10 < e.offsetWidth ? setIsEnd(true) : setIsEnd(false);
    }

    const checkStop = () => {
      setIsMoving(false);
    }

    (buttonsRef.current as HTMLDivElement).addEventListener('scroll', checkChange, false);
    (buttonsRef.current as HTMLDivElement).addEventListener('scrollend', checkStop, false);
    return () => {
      if (buttonsRef.current !== null) {
        (buttonsRef.current as unknown as HTMLDivElement).addEventListener("scroll", checkChange, false);
        (buttonsRef.current as unknown as HTMLDivElement).addEventListener('scrollend', checkStop, false);
      }
    };
  }, [])

  // Function to handle scrolling to the left
  const handleScrollLeft = () => {
    const container = buttonsRef.current as unknown as HTMLDivElement;
    container.scrollBy({
      left: -1000, // You can adjust the scroll amount based on your preference
      behavior: "smooth", // Smooth scrolling animation
    });
  };

  // Function to handle scrolling to the right
  const handleScrollRight = () => {
    const container = buttonsRef.current as unknown as HTMLDivElement;
    container.scrollBy({
      left: 1000, // You can adjust the scroll amount based on your preference
      behavior: "smooth", // Smooth scrolling animation
    });
  };

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
          {data.map((e) => <QuickButton data={e} key={e.id} />)}
      </div>
      <Image 
        alt=""
        width={30}
        height={30}
        key={'right'}
        src={'/icons/arrow-circle.svg'}
        className={`absolute left-0 top-14 rotate-180 duration-200 delay-100
          ${isMoving ? 
          '-translate-x-10 scale-50' : 
            isStart ? 
            '-translate-x-10 scale-50' :
            'translate-x-1'
          }`}
        onClick={handleScrollLeft}
        />
      <Image 
        alt=""
        width={30}
        height={30}
        key={'left'}
        src={'/icons/arrow-circle.svg'}
        className={`absolute right-0 top-14 duration-200 delay-100
          ${isMoving ? 
          'translate-x-10 scale-50' : 
            isEnd ? 
            'translate-x-10 scale-50' :
            '-translate-x-1'
          }`}
        onClick={handleScrollRight}
        />
    </section>
  )
}

export default QuickButtons