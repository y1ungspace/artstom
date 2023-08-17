import { IBlock3, IBlock3Paragraph } from "@/app/variables/Interfaces"
import Block3Data from '@/app/lib/Block3Data'
import { useEffect, useState } from "react";
import { getBlock3 } from "@/app/lib/contentful";

const Block3: React.FC = () => {

  const [data, setData] = useState<IBlock3 | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedData = await getBlock3();
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

  const Paragraph: React.FC<IBlock3Paragraph> = (props) => {
    return(
      <div 
        className='
          flex
          items-center
          3md:gap-8
          gap-4
          font-base
          lg:text-xl
          text-base
          3md:px-6
          duration-200
          ease-in-out
          text-base-1/80
          hover:scale-105
          hover:text-base-1
        '>
        {props.id % 2 === 0 ? 
          <>
            <p>{props.text}</p>
            <img
              className='2lg:w-[500px] 3md:w-96 w-80 rounded-3xl'
              alt=""
              src={props.img}
              width={500}
              height={500}
              />
          </> :
          <>
            <img 
              className='2lg:w-[500px] 3md:w-96 w-80 rounded-3xl'
              alt=""
              src={props.img}
              width={500}
              height={500}
              />
              <p >{props.text}</p>
          </>
        }
      </div>
    )
  }

  return(
    <section className='w-[calc(100%_-_50px)] 3md:py-16 py-8 mx-auto 2lg:mt-16 rounded-3xl'>
      <h1 className='lg:text-6xl text-5xl font-bold'>{data.title}</h1>
      <h3 className='component lg:w-[550px] w-[420px] lg:text-lg text-sm lg:mb-0 mb-4 opacity-80'>{data.subtitle}</h3>
      <div>
        <Paragraph id={1} key={1} text={data.stage1} img={Block3Data[0].img} />
        <Paragraph id={2} key={2} text={data.stage2} img={Block3Data[1].img} />
        <Paragraph id={3} key={3} text={data.stage3} img={Block3Data[2].img} />
        <Paragraph id={4} key={4} text={data.stage4} img={Block3Data[3].img} />
      </div>
    </section>
  )
}

export default Block3