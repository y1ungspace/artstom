'use client';

import TopSection from '@/app/components/TopSection';
import QuickButtons from '@/app/components/services/QuickButtons';
import InfoWrapper from '@/app/components/services/InfoWrapper';
import Slidebar from '@/app/components/services/SideBar';

import { ItopSectionObj } from '@/app/variables/Interfaces';
import services from '@/app/lib/services';

const topSection: ItopSectionObj = {
  img: '/images/woman-smiling-5.png',
  title: 'Услуги',
  subtitle: 'пока здесь текст не придумали пока здесь текст не придумали пока здесь текст не придумали пока здесь текст не придумали пока здесь текст не придумали пока здесь текст не придумали пока здесь текст не придумалипока здесь текст не придумали', 
}

export default function Services() {
  return (
    <>
      <TopSection data={topSection} />
      <QuickButtons data={services} />
      <div className='flex gap-6 mx-10'>
      <Slidebar data={services} />
      <InfoWrapper data={services} />
      </div>
    </>
  )
} 
