import { IBlock3Paragraph } from "@/app/variables/Interfaces"
import Block3Data from '@/app/lib/Block3Data'

const Block3Small: React.FC = () => {

  const Paragraph: React.FC<IBlock3Paragraph> = (props) => {
    return(
      <div className="w-80 bg-base-4 rounded-3xl">
        <img
        alt='n' 
        src={props. img} 
        width={500}
        height={500}
        className='rounded-3xl'
        />
        <p className="p-4 pt-6 text-sm">{props.text}</p>
      </div>
    )
  }

  return(
    <section className='w-[calc(100%_-_50px)] text-center pt-8 pb-4 mx-auto rounded-3xl'>
      <h1 className='text-5xl font-bold'>Как мы работаем</h1>
      <h3 className='component text-sm mb-4 mx-24 opacity-80'>Уделяем повышенное внимание эстетике и профилактике: Мы уверены и постоянно доказываем на практике, что даже простую пломбу можно поставить красиво – так, чтобы она приближала улыбку к идеалу.</h3>
      <div className="flex justify-between gap-4 w-full flex-wrap overflow-hidden">
        {Block3Data.map((elem) => 
          <Paragraph id={elem.id} key={elem.id} text={elem.text} img={elem.img} />
        )}
      </div>
    </section>
  )
}

export default Block3Small