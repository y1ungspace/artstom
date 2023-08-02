'use client'

import { useState } from 'react';
import Image from 'next/image';
import { IServiceData } from '@/app/variables/Interfaces';

const InfoBox: React.FC<{data: IServiceData, id: string}> = ({data}) => {
  const [isMagnetActive, setIsMagnetActive] = useState(false);
  const [magnetPosition, setMagnetPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY } = event;
    const target = event.currentTarget;

    const { top, left, width, height } = target.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    const distanceX = clientX - centerX;
    const distanceY = clientY - centerY;

    const { paddingLeft, paddingRight, paddingTop, paddingBottom } = getComputedStyle(target);
    const paddingX = (parseFloat(paddingLeft) + parseFloat(paddingRight) * 9);
    const paddingY = (parseFloat(paddingTop) + parseFloat(paddingBottom) * 9);

    const maxX = (width / 2 - paddingX) / 2;
    const maxY = (height / 2 - paddingY) / 2;

    const clampedX = Math.max(-maxX, Math.min(distanceX, maxX));
    const clampedY = Math.max(-maxY, Math.min(distanceY, maxY));

    if (Math.abs(clampedX) < 30 && Math.abs(clampedY) < 30) {
      setIsMagnetActive(true);
      setMagnetPosition({ x: clampedX, y: clampedY });
    } else {
      setIsMagnetActive(false);
    }
  };

  const handleMouseLeave = () => {
    setIsMagnetActive(false);
    setTimeout(() => {
      setMagnetPosition({ x: 0, y: 0 });
    }, 300);
  };

  return (
    <div 
      id={`box-${data.id}`}
      className={`
            w-full
            flex
            gap-10
            mb-20
            mx-auto
            p-[50px]
            scroll-mt-28
            rounded-2xl
            shadow-md
            ${data.id % 5 === 0 ? 
              'bg-element-5/20' : 
              data.id % 4 === 0 ? 
              'bg-element-4/20' : 
              data.id % 3 === 0 ? 
              'bg-element-3/20' :
              data.id % 2 === 0 ? 
              'bg-element-2/20' : 
              'bg-element-1/20'
            }`
          }
            >
      <div className={`text-lg font-base w-1/2 text-base-3`}>
        <h1 className='text-4xl font-md mb-5 text-base-1'>{data.name}</h1>
        {data.description.map((text) => <p className='mb-6' key={text}>{text}</p>)}
      </div>
      <div
        className={`flex justify-center items-center grow p-5 radial-background ${isMagnetActive ? 'magnet' : ''}`}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <div className="image-container grow p-8">
          <img
            src="https://www.dropbox.com/s/ge6l46jc74loei8/caries.png?raw=1"
            width={220}
            height={210}
            alt=""
            style={{
              transform: `translate(${magnetPosition.x}px, ${magnetPosition.y}px)`,
              transition: 'transform 2s ease-out',
              width: '100%',
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default InfoBox;
