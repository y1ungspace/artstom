'use client'

import { useState } from 'react';
import Image from 'next/image';

const InfoBox = () => {
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
    const paddingX = (parseFloat(paddingLeft) + parseFloat(paddingRight) * 10);
    const paddingY = (parseFloat(paddingTop) + parseFloat(paddingBottom) * 10);

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
    <div className='w-[calc(100%_-_40px)] flex gap-10 bg-base-2/20 mb-20 mx-auto p-[50px] rounded-2xl'>
      <div className={`text-lg font-base w-1/2 text-base-3`}>
        <h1 className='text-4xl font-md mb-5 text-base-1'>Лечение кариеса</h1>
        <p className='mb-6'>Лечение кариеса происходит всего за один визит, в клинике "Галерея Улыбок" зубы восстанавливают с использованием современных, эстетичных и прочных композитных материалов.</p>
        <p>В 90% случаев течение кариеса безсимптомно, а несвоевременное лечение приводит к воспалению пульпы зуба и необходимости лечить корневые каналы (когда сохранить зуб живым невозможно). Поэтому регулярные профилактические осмотры и лечение кариеса на ранних стадиях - самый недорогой способ сохранить свои зубы на всю жизнь.</p>
      </div>
      <div
        className={`grow p-5 radial-background ${isMagnetActive ? 'magnet' : ''}`}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <div className="image-container p-14">
          <Image
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
