'use client';

import TopSection from '@/app/components/servises/TopSection';
import QuickButtons from '@/app/components/servises/QuickButtons';
import InfoWrapper from '@/app/components/servises/InfoWrapper';
import Slidebar from '@/app/components/servises/SideBar';

import services from '@/app/lib/services';

export default function Services() {
  return (
    <>
      <TopSection />
      <QuickButtons data={services} />
      <div className='flex gap-6 mx-10'>
      <Slidebar data={services} />
      <InfoWrapper data={services} />
      </div>
    </>
  )
} 
