'use client'

import Image from "next/image" 

const Modal: React.FC<{image: string}> = ({image}) => {
  return(
    <section
      id="modal"
      className="
        modal-appear
        fixed
        top-0
        left-0
        w-full
        h-full
        flex
        justify-center
        items-center
        bg-base-3/50
        z-10 
        duration-300
      ">
      <div
        className="
          flex
          flex-row
        ">
        {/* <button
          className="
            w-[100px]
            min-h-[100px]
            bg-button-left
            bg-contain
            bg-no-repeat
            bg-center
            duration-300
            hover:scale-110
          "/> */}
        <Image
          id="modal-img"
          src={image}
          alt="imgModal"
          width="4000"
          height="100"
          className="
            w-full
            h-[700px]
            bg-cover
            rounded-2xl
          "
        />
         {/* <button
          className="
            w-[100px]
            min-h-[100px]
            bg-button-right
            bg-contain
            bg-no-repeat
            bg-center
            duration-300
            hover:scale-105
          "/> */}
      </div>
    </section>
  )
}

export default Modal