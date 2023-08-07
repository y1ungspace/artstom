import { IBlock3Paragraph } from "@/app/variables/Interfaces"
import Block3Data from '@/app/lib/Block3Data'

const Block3: React.FC = () => {

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
      <h1 className='lg:text-6xl text-5xl font-bold'>Как мы работаем</h1>
      <h3 className='component lg:w-[550px] w-[420px] lg:text-lg text-sm lg:mb-0 mb-4 opacity-80'>Уделяем повышенное внимание эстетике и профилактике: Мы уверены и постоянно доказываем на практике, что даже простую пломбу можно поставить красиво – так, чтобы она приближала улыбку к идеалу.</h3>
      <div>
        {Block3Data.map((elem) => 
          <Paragraph id={elem.id} key={elem.id} text={elem.text} img={elem.img} />
        )}
      </div>
    </section>
  )
}

export default Block3