import Image from "next/image";
import { Inter } from 'next/font/google'

const fontInter = Inter({
  subsets: ["latin"],
  weight: '300'
})

const Contacts: React.FC = () => {
  return(
    <div className={"flex justify-around items-center gap-3 " + fontInter.className}>
      <a className="hover:text-base-2" href="tel:89114536362">8(911)453-63-62</a>
    </div>
  )
}

export default Contacts