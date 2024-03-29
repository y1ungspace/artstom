'use client'

import React from 'react';
import Masonry from 'react-smart-masonry';
import Image from 'next/image';


const breakpoints = { mobile: 0, tablet: 600, desktop: 900, desktopPlus: 1200 };
const MasonryLayout = ({ images }: {images: string[]}) => {
  return (
    <Masonry
      breakpoints={breakpoints}
      columns={{ mobile: 1, tablet: 2, desktop: 3 , desktopPlus: 4 }}
      autoArrange
      className="my-masonry-grid"
    >
      {images.map((imagegh, index) => (
        <div key={index} className="my-masonry-grid-item">
          <img
            src={imagegh}
            alt='img'
            width={3000}
            height={3000}
            className='
              w-full
              p-2
              cursor-pointer
              duration-500
              hover:scale-105
            '
          />
        </div>
      ))}
    </Masonry>
  );
};

export default MasonryLayout