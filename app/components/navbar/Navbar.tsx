'use client'

import BurgerMenu from "./BurgerMenu"
import Contacts from "./Contacts"
import Divider from "./Divider"
import Logo from "../Logo"
import MenuButton from "./MenuButton"
import Title from "./Title"
import Links from "./Links"
import Subtitle from "./Subtitle"
import { useState } from "react"
import LogoSmaller from "../LogoSmaller"

const Navbar: React.FC = () => {

  const [topPosition, setTopPosition] = useState(0)

  if (typeof window !== "undefined") {
      window.onscroll = () => setTopPosition(window.scrollY)
  }

  return(
    <section className={
      topPosition > 30 ? 
      "flex justify-between items-center px-8 py-3 fixed top-0 bg-base-4 w-full z-10 drop-shadow-md transition-all" : 
      "flex justify-between items-center px-8 2lg:py-8 py-3 fixed top-0 w-full z-10 transition-all"
      }>
      <Links />
      <div className={
      topPosition > 30 ? 
      "flex items-center scale-[0.8] transition-all" : 
      "flex items-center scale-100 transition-all"
      }>
        {window.screen.width > 1100 ?
         <Logo /> :
         <LogoSmaller />
      }
       
      </div>
      <div className="flex gap-4 items-center">
        <Subtitle />
        <Contacts />
        <MenuButton />
      </div>
    </section>
  )
}

export default Navbar