import { useSelector } from "react-redux"
import { RootState } from "@/app/GlobalRedux/store"

const BurgerMenu: React.FC = () => {

  const isBurger = useSelector((state: RootState) => state.burger.value)

  return(
    <nav className={"burger absolute top-14 flex flex-col w-64 w-min-full min-h-max transition-all duration-300 z-10 rounded-xl " + (isBurger ? "right-3" : "-right-64")}>
      <button type="button" className="py-2 pl-8 font-bold text-left hover:translate-x-2 transition-all">Услуги</button>
      <button type="button" className="py-2 pl-8 font-bold text-left hover:translate-x-2 transition-all">Цены</button>
      <button type="button" className="py-2 pl-8 font-bold text-left hover:translate-x-2 transition-all">Специалисты</button>
      <button type="button" className="py-2 pl-8 font-bold text-left hover:translate-x-2 transition-all">Галерея</button>
      <button type="button" className="py-2 pl-8 font-bold text-left hover:translate-x-2 transition-all">Контакты</button>
    </nav>
  )
}

export default BurgerMenu