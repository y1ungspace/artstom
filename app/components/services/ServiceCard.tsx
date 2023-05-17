'use client'

const ServiceCard: React.FC = () => {
  return(
    <div className="
            w-80 
            bg-base-3/40 
            border-base-3
            rounded-2xl
            px-4
            py-1
            border-[1px]
            backdrop-blur-xl
            cursor-pointer
            duration-200
            hover:-translate-y-1
          ">
      <img 
        className="w-72 h-72 border-base-3 border-[1px] rounded-2xl mx-auto"
        src="https://cdn.create.vista.com/api/media/small/138446540/stock-photo-male-doctor-with-stethoscope"
        alt=''
        ></img>
      <h3 className="text-xl font-bold py-5">Название</h3>
      <h3 className="text-md font-medium opacity-90">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum molestiae vitae unde, quidem ipsa rerum fugit repellat quasi fuga ex dolore adipisci praesentium deserunt soluta laboriosam voluptas at tenetur vero!</h3>
    </div>
  )
}

export default ServiceCard