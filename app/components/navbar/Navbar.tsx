'use client'

import BurgerMenu from "./BurgerMenu"
import Contacts from "./Contacts"
import Divider from "./Divider"
import Logo from "../Logo"
import MenuButton from "./MenuButton"
import Title from "./Title"
import Links from "./Links"
import Subtitle from "./Subtitle"

const Navbar: React.FC = () => {
  return(
    <section className="flex justify-between items-center px-8 py-1 fixed top-0 bg-base-4 backdrop-blur-sm w-full z-10 drop-shadow-lg">
      <Links />
      <div className="flex items-center gap-4">
        <Logo />
        {/* <Divider />
        <Title /> */}
      </div>
      <div className="flex gap-4 items-center">
        <Subtitle />
        <Contacts />
        {/* <MenuButton /> */}
      </div>
      {/* <BurgerMenu /> */}
    </section>
  )
}

export default Navbar