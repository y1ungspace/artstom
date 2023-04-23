'use client'

import { useState } from "react"
import BurgerMenu from "./BurgerMenu"
import Contacts from "./Contacts"
import Divider from "./Divider"
import Logo from "./Logo"
import MenuButton from "./MenuButton"
import Sections from "./Sections"
import Title from "./Title"

const Navbar: React.FC = () => {
  return(
    <section className="flex px-3 py-1 sticky top-0 bg-base-4/80 z-10">
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