'use client'

import { useEffect, useState } from "react";

interface sliderElem {
  keyValue: string,
  id: number,
}

const sliderImages = [
  1, 2, 3, 4, 5
]

const Slider: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(1);
  const [images, setImages] = useState<JSX.Element[]>();
  const [labels, setLabels] = useState<JSX.Element[]>();
  const [isTransitionBlocked, setIsTransitionBlocked] = useState(false);
  const [disabled, setDisabled] = useState(false);
  
  useEffect(() => {

    const imageArr = () => sliderImages.map((x) => {
      return(<ImageSlide keyValue={'image-slide-' + x} id={x} />)
      }
    )
  
    const labelArr = () => sliderImages.map((x) => {
      return(<SlideLabel keyValue={'label-slide-' + x} id={x} />)
      }
    )

    const images = imageArr()

    images.unshift(<ImageSlide keyValue={'image-slide-start'} id={5} />)
    images.push(<ImageSlide keyValue={'label-slide-end'} id={1} />)

    setImages(images)
    setLabels(labelArr())

  },[currentSlide])
  
  const ImageSlide: React.FC<sliderElem> = (props) => {
    return(
      <div 
      className={'flex flex-row min-w-[600px] h-[400px]'}
      key={props.keyValue}
      >
      <div className="bg-red-400 w-1/2 min-h-full"></div>
      <div className="bg-yellow-300 w-1/2 min-h-full"></div>
    </div>
    )
  }
  
  const SlideLabel: React.FC<sliderElem> = (props) => {
    return(
      <label 
        htmlFor={props.keyValue} 
        className={`
        inline-block 
        w-2 min-h-[8px] 
        rounded-full 
      hover:bg-base-1
        ${currentSlide === props.id ? 
        'bg-base-1 animate-[slider_0.3s_ease-in-out_forwards]' : 
        'bg-base-3'}`}
        id={'radio' + props.keyValue}
        onClick={() => setCurrentSlide(props.id)}
        ></label>
      )
  }

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
                    flex 
                    transition-${isTransitionBlocked ? 'none' : 'all'} 
                    duration-${isTransitionBlocked ? '0' : '300'}
                    w-[600px] 
                    h-[400px]
                    slider-${currentSlide}`
                  }>
           {images}
          </div>
          <div className="absolute bottom-3 flex gap-3 justify-center w-[600px]">
            {labels}
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