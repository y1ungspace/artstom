import Image from "next/image";

const Contacts: React.FC = () => {
  return(
    <div className="flex justify-around flex-wrap w-[90px]">
      <a href="tel:89114536362">89114536362</a>
      <Image 
        className="cursor-pointer"
        src="/icons/vk.svg" 
        alt="icon" 
        width="20" 
        height="20" />
      <Image 
       className="cursor-pointer"
        src="/icons/whatsapp.svg" 
        alt="icon" 
        width="20" 
        height="20" />
      <Image 
       className="cursor-pointer"
        src="/icons/viber.svg" 
        alt="icon" 
        width="20" 
        height="20" />
    </div>
  )
}

export default Contacts