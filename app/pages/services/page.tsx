'use client';

import TopSection from '@/app/components/TopSection';
import QuickButtons from '@/app/components/services/QuickButtons';
import InfoWrapper from '@/app/components/services/InfoWrapper';
import Slidebar from '@/app/components/services/SideBar';

import { IServiceData } from '@/app/variables/Interfaces';
import { useEffect, useState } from 'react';
import { getServices } from '@/app/lib/contentful';

export default function Services() {

  const [data, setData] = useState<IServiceData[] | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedData = await getServices();
        if (fetchedData) 
          setData(fetchedData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    
    fetchData();
  }, []);

  if (!data) {
    return <div></div>;
  }

  return (
    <>
      <TopSection url={'services'} />
      <QuickButtons data={data} />
      <div className='flex gap-6 mx-10'>
      <Slidebar data={data} />
      <InfoWrapper data={data} />
      </div>
    </>
  )
} 
