'use client'

import React from 'react';
import Masonry from 'react-smart-masonry';
import Image from 'next/image';


const breakpoints = { mobile: 0, tablet: 900, desktop: 1200 };
const MasonryLayout = ({ images }: {images: string[]}) => {
  return (
    <Masonry
      breakpoints={breakpoints}
      columns={{ mobile: 2, tablet: 3, desktop: 4 }}
      autoArrange
      className="my-masonry-grid"
    >
      {images.map((image, index) => (
        <div key={index} className="my-masonry-grid-item">
          <Image
            src={image}
            alt='img'
            width={4000}
            height={4000}
            className='w-full p-2'
          />
        </div>
      ))}
    </Masonry>
  );
};

export default MasonryLayout