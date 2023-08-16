'use client'

import InfoBox from "./InfoBox"
import { IServiceDataWrapper } from "@/app/variables/Interfaces"


const InfoWrapper: React.FC<IServiceDataWrapper> = ({data}) => {
  return(
   <section>
    {data.map((e) => <InfoBox data={e} key={e.id} id={`box-${e.id}`} />)}
   </section>
  )
}

export default InfoWrapper