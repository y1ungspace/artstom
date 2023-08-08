import Image from "next/image";
import { Inter } from 'next/font/google'

const fontInter = Inter({
  subsets: ["latin"],
  weight: '300'
})

const Contacts: React.FC = () => {
  return(
    <div className={"flex justify-around items-center gap-3"}>
      <a className="
          2sm:block
          hidden
          text-sm 
          font-medium
          uppercase
          border-[1px]
          border-base-1
          px-5
          py-[14px]
          rounded-lg
          duration-300
          hover:bg-base-5
          hover:border-base-5
          hover:text-base-4
      " href="tel:89114536362">Позвонить</a>
    </div>
  )
}

export default Contacts