'use client'

import services from "@/app/lib/services"
import InfoBox from "./InfoBox"
import { IServiceDataWrapper } from "@/app/variables/Interfaces"


const InfoWrapper: React.FC<IServiceDataWrapper> = ({data}) => {
  return(
   <section>
    {data.map((e) => <InfoBox data={e} key={e.id} />)}
   </section>
  )
}

export default InfoWrapper