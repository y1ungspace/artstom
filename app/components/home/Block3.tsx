import { IBlock3Paragraph } from "@/app/variables/Interfaces"
import Block3Data from '@/app/lib/Block3Data'

const Block3: React.FC = () => {

  const Paragraph: React.FC<IBlock3Paragraph> = (props) => {
    return(
      <div className='flex items-center gap-8 font-medium text-xl px-6 duration-200 ease-in-out text-base-1/80 hover:scale-105 hover:text-base-1'>
        {props.id % 2 === 0 ? 
          <>
            <p>{props.text}</p>
            <img
              className='rounded-3xl'
              alt=""
              src={props.img}
              width={500}
              height={500}
              />
          </> :
          <>
            <img 
              className='rounded-3xl'
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
    <section className='w-[calc(100%_-_50px)] p-16 mx-auto mt-16 rounded-3xl pb-32'>
      <h1 className='text-6xl font-bold'>Как мы работаем</h1>
      <h3 className='component w-[550px] text-xl opacity-80'>Уделяем повышенное внимание эстетике и профилактике: Мы уверены и постоянно доказываем на практике, что даже простую пломбу можно поставить красиво – так, чтобы она приближала улыбку к идеалу.</h3>
      <div>
        {Block3Data.map((elem) => 
          <Paragraph id={elem.id} key={elem.id} text={elem.text} img={elem.img} />
        )}
      </div>
    </section>
  )
}

export default Block3