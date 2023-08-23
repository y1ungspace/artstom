'use client'


const ImageBox: React.FC = () => {
  return(
    <section
      className="
        w-[calc(100%_-_50px)]
        mx-auto
      ">
      <div
        className="
          flex
          flex-row
          items-center
          gap-4
          bg-base-2/10
          rounded-xl
          p-4
        ">
        <h3
          className="
          text-base-1/80
          font-medium
          ">
            Пациент Вова</h3>
        <div
          className="
            w-2
            h-2
            bg-base-1/70
            rounded-xl
          ">
          </div>
        <h3
          className="
            text-sm
            font-medium
            uppercase
            text-base-1/50
          ">
            Услуга</h3>
      </div>
      <div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </section>
  )
}

export default ImageBox