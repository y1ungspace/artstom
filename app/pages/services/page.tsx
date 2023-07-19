'use client';

import Image from 'next/image'
import Logo from '@/app/components/Logo';
import TopSection from '@/app/components/servises/TopSection';
import QuickButton from '@/app/components/servises/QuickButton';
import QuickButtons from '@/app/components/servises/QuickButtons';
import InfoWrapper from '@/app/components/servises/InfoWrapper';

export default function Services() {
  return (
    <>
      <TopSection />
      <QuickButtons />
      <InfoWrapper />
    </>
  )
} 
