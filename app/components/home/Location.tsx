'use client'

import { getLocation } from "@/app/lib/contentful";
import { ILocation } from "@/app/variables/Interfaces";
import { useEffect, useState } from "react";

const Location: React.FC = () => {

  const [data, setData] = useState<ILocation | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedData = await getLocation();
        if (fetchedData) 
          setData(fetchedData);
          console.log(fetchedData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    
    fetchData();
  }, []);

  if (!data) {
    return <div></div>;
  }

  return(
    <section 
      className='
        xl:w-[1100px]
        w-[calc(100%_-_50px)]
        mx-auto
        rounded-3xl
        text-center
        lg:mt-32
        3md:mt-24
        2md:mt-16
        md:mt-8
        mt-12
        '>
      <h1
        className="
          md:text-4xl
          xs:text-3xl
          text-2xl
          font-bold
        ">{data.title}</h1>
      <h3
        className="
          lg:text-lg
          2md:text-base
          text-sm
          font-medium
          opacity-80
          2md:w-[700px]
          w-full
          mx-auto
          pb-5
          2sm:px-0
          xs:px-8
          pt-2"
        >{data.subtitle}</h3>
      <div style={{position: 'relative', overflow: 'hidden'}}>
        <a 
          href="https://yandex.ru/maps/org/artstom/27705467946/?utm_medium=mapframe&utm_source=maps" 
          style={{color: '#eee', fontSize: '12px', position: 'absolute', top: '0px'}}
          >
        </a>
        <iframe 
          className="w-full 2md:h-[400px] sm:h-[300px] xs:h-[600px] h-[540px] rounded-3xl"
          src="https://yandex.ru/map-widget/v1/?ll=20.433009%2C54.715916&mode=search&oid=27705467946&ol=biz&z=17" 
          width="1200" 
          height="400"  
          style={{position: "relative"}}
          >
        </iframe>
      </div>
    </section>
  )
}

export default Location