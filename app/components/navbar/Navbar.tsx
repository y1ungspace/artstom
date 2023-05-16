'use client'

import BurgerMenu from "./BurgerMenu"
import Contacts from "./Contacts"
import Divider from "./Divider"
import Logo from "../Logo"
import MenuButton from "./MenuButton"
import Title from "./Title"

const Navbar: React.FC = () => {
  return(
    <section className="flex px-3 py-1 fixed top-0 bg-base-4/90 backdrop-blur-sm w-full z-10">
      <div className="flex items-center gap-4">
        <Logo />
        <Divider />
        <Title />
      </div>
      <div className="flex gap-4 ml-auto">
        <Contacts />
        <MenuButton />
      </div>
      <BurgerMenu />
    </section>
  )
}

export default Navbar