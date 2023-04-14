import Image from "next/image";

const MenuButton: React.FC = () => {
  return(
    <Image
      className="cursor-pointer"
      src="/icons/menu.svg"
      alt="Burger Menu"
      width="50"
      height="50"
     />
  )
}

export default MenuButton