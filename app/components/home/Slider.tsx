'use client'

import { useState } from "react";

const sliderArr = [
  'bg-sky-400',
  'bg-red-400',
  'bg-yellow-400',
  'bg-green-400',
  'bg-gray-400',
]

const Slider: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(1);
  const [isTransitionBlocked, setIsTransitionBlocked] = useState(false);
  const [disabled, setDisabled] = useState(false);

  const imageArr = [];
  const labelArr = [];

  for (let i = 1; i <= sliderArr.length; i++) {
    imageArr.push(<div 
                    className={'container min-w-[600px] h-[400px] ' + sliderArr[i - 1]}
                    key={'img' + i}
    />)
    labelArr.push(<label 
                    htmlFor={'radio' + i} 
                    className={`
                      inline-block 
                      w-2 min-h-[8px] 
                      rounded-full 
                      hover:bg-base-1
                      ${currentSlide === i ? 
                        'bg-base-1 animate-[slider_0.3s_ease-in-out_forwards]' : 
                        'bg-base-3'}`}
                    key={'radio' + i}
                    onClick={() => setCurrentSlide(i)}
                  >
                  </label>)
  }

imageArr.unshift(<div 
  className={'container min-w-[600px] h-[400px] ' + sliderArr[4]}
  key={'img5-forward'}
/>)
imageArr.push(<div 
  className={'container min-w-[600px] h-[400px] ' + sliderArr[0]}
  key={'img1-next'}
/>)

  function resetSlider(props: 'first' | 'last') {

    setTimeout(() => {
      setIsTransitionBlocked(true);
    }, 300)
    setTimeout(() => {
      setIsTransitionBlocked(false);
    }, 500)

    if (props === 'first') {
      setCurrentSlide(6);
      setTimeout(() => {
        setCurrentSlide(1);
      }, 300)

    } else {
      setCurrentSlide(0);
      setTimeout(() => {
        setCurrentSlide(5);
      }, 300)

    }
  }

  function handleClick(props: 'left' | 'right') {

    if (disabled) {
      return
    }

    switch(props) {

      case 'left': 
        currentSlide > 1 ? 
        setCurrentSlide(currentSlide - 1) : 
        resetSlider('last');
        break;

      case 'right': 
        currentSlide < 5 ? 
        setCurrentSlide(currentSlide + 1) : 
        resetSlider('first');
    }

    setDisabled(true)
    setTimeout(() => setDisabled(false), 500)
    
  }

  return(
    <>
      <div className="flex items-center">
      <svg 
        className="
          fill-base-3 
          cursor-pointer 
          duration-150 
          ease-in-out 
          hover:fill-base-1 
          hover:scale-125"
        onClick={() => handleClick('left')}
        xmlns="http://www.w3.org/2000/svg" 
        height="48" 
        viewBox="0 96 960 960" 
        width="48">
        <path d="M561 816 320 575l241-241 43 43-198 198 198 198-43 43Z"/>
      </svg>
        <div className="container relative overflow-hidden w-[600px] h-[400px] rounded-2xl z-0">
          <div className={`
                    flex transition-${isTransitionBlocked ? 'none' : 'all'} 
                    duration-${isTransitionBlocked ? '0' : '300'}}
                    w-[600px] 
                    h-[400px] 
                    -translate-x-[${currentSlide * 600}px]`
                  }>
           {imageArr}
          </div>
          <div className="absolute bottom-3 flex gap-3 justify-center w-[600px]">
            {labelArr}
          </div>
        </div>
        <svg 
          className="
            fill-base-3 
            cursor-pointer 
            duration-150 
            ease-in-out 
            hover:fill-base-1 
            hover:scale-125"
          onClick={() => handleClick('right')}
          xmlns="http://www.w3.org/2000/svg" 
          height="48" 
          viewBox="0 96 960 960" 
          width="48">
          <path d="m375 816-43-43 198-198-198-198 43-43 241 241-241 241Z"/>
        </svg>
      </div>
    </>
  )
}

export default Slider