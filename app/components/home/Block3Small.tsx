import { IBlock3Paragraph } from "@/app/variables/Interfaces"
import Block3Data from '@/app/lib/Block3Data'

const Block3Small: React.FC = () => {

  const Paragraph: React.FC<IBlock3Paragraph> = (props) => {
    return(
      <div className="md:w-80 w-96 bg-base-4 rounded-3xl">
        <img
        alt='n' 
        src={props. img} 
        width={500}
        height={500}
        className='rounded-3xl'
        />
        <p className="p-4 pt-6 md:text-sm text-base">{props.text}</p>
      </div>
    )
  }

  return(
    <section className='w-[calc(100%_-_50px)] text-center pt-8 pb-4 mx-auto rounded-3xl'>
      <h1 className='sm:text-5xl text-4xl font-bold'>Как мы работаем</h1>
      <h3 className='component text-sm md:p-0 py-4 mb-4 sm:mx-24 mx-4 opacity-80'>Уделяем повышенное внимание эстетике и профилактике: Мы уверены и постоянно доказываем на практике, что даже простую пломбу можно поставить красиво – так, чтобы она приближала улыбку к идеалу.</h3>
      <div
        className="
          flex
          md:justify-between
          justify-center
          gap-4
          w-full
          flex-wrap
          overflow-hidden
        ">
        {Block3Data.map((elem) => 
          <Paragraph id={elem.id} key={elem.id} text={elem.text} img={elem.img} />
        )}
      </div>
    </section>
  )
}

export default Block3Small