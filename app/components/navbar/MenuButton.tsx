import Image from "next/image";
import { useSelector } from "react-redux"
import { RootState } from "@/app/GlobalRedux/store"
import { useDispatch } from "react-redux";
import {active, disabled} from "@/app/GlobalRedux/Features/burgerSlice";

const MenuButton: React.FC = () => {

  const burger = useSelector((state: RootState) => state.burger.value)
  const dispatch = useDispatch()

  function handleClick() {
    if (burger) {
      dispatch(disabled())
    } else {
      dispatch(active())
    }
  }

  return(
    <Image
      className="cursor-pointer"
      onClick={() => handleClick()}
      src="/icons/menu.svg"
      alt="Burger Menu"
      width="40"
      height="40"
     />
  )
}

export default MenuButton