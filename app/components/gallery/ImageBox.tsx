'use client'

import { IImageBox } from "@/app/variables/Interfaces"
import MasonryLayout from "./MasonryLayout"

const ImageBox: React.FC<{props: IImageBox}> = ({props}) => {
  return(
    <section
      key={props.id}
      className="
        w-[calc(100%_-_50px)]
        mx-auto
        mb-10
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
            {props.name}</h3>
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
            {props.serviceType}</h3>
      </div>
      <MasonryLayout images={props.images} />
    </section>
  )
}

export default ImageBox