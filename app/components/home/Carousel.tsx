'use client'

import { useState } from 'react';

interface CarouselProps {
  width: number;
  height: number;
  images: string[];
}

const Carousel = ({ width, height, images }: CarouselProps) => {
  const [currentImage, setCurrentImage] = useState(0);

  const handleNextClick = () => {
    setCurrentImage((currentImage + 1) % images.length);
  };

  const handlePrevClick = () => {
    setCurrentImage((currentImage + images.length - 1) % images.length);
  };

  return (
    <div className={`container flex min-w-[${width}px] min-h-[${height}px]`} >
      <button
        className="inset-y-0 left-0 z-10 px-2 py-4"
        onClick={handlePrevClick}
      >
         <svg 
        className="
          fill-base-3 
          cursor-pointer 
          duration-150 
          ease-in-out 
          hover:fill-base-1 
          hover:scale-125"
        xmlns="http://www.w3.org/2000/svg" 
        height="48" 
        viewBox="0 96 960 960" 
        width="48">
        <path d="M561 816 320 575l241-241 43 43-198 198 198 198-43 43Z"/>
      </svg>
      </button>
      <div className={`relative flex items-center justify-center w-[${width}px] h-[${height}px]`}>
        <img
          src={images[currentImage]}
          alt={`Image ${currentImage + 1}`}
          width={width}
          height={height}
          style={{ borderRadius: '1.5rem'}}
        />
        <div className="absolute bottom-3 flex gap-3 justify-center w-[600px]">
          {images.map((_, index) => (
            <button
              key={index}
              className={`
                inline-block 
                cursor-auto
                w-2
                min-h-[8px] 
                rounded-full 
              hover:bg-base-1 
                transition-all
                duration-300 
                ${
                index === currentImage ? 
                    'bg-base-1 animate-[slider_0.3s_ease-in-out_forwards]' : 
                    'bg-base-3'
              }`}
              onClick={() => setCurrentImage(index)}
            />
          ))}
        </div>
      </div>
      <button
        className="inset-y-0 right-0 z-10 px-2 py-4"
        onClick={handleNextClick}
      >
         <svg 
          className="
            fill-base-3 
            cursor-pointer 
            duration-150 
            ease-in-out 
            hover:fill-base-1 
            hover:scale-125"
          xmlns="http://www.w3.org/2000/svg" 
          height="48" 
          viewBox="0 96 960 960" 
          width="48">
          <path d="m375 816-43-43 198-198-198-198 43-43 241 241-241 241Z"/>
        </svg>
      </button>
    </div>
  );
};

export default Carousel;
