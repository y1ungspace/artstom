'use client'

import Contacts from "./Contacts"
import Logo from "../Logo"
import MenuButton from "./MenuButton"
import Links from "./Links"
import Subtitle from "./Subtitle"
import { useEffect, useState } from "react"
import LogoSmaller from "../LogoSmaller"


// const contentful = require('contentful')

// const client = contentful.createClient({
//   space: 'n3fw6fm0294h',
//   environment: 'master', // defaults to 'master' if not set
//   accessToken: 'wg1rw5VY4qe-WDkXf9fCVv0ldCTKLougbYxF7SY1dGg'
// })

// client.getEntry('16zYjJURSaNGT684637EK1')
//   .then((entry) => console.log(entry))
//   .catch(console.error)

const Navbar: React.FC = () => {

  const [topPosition, setTopPosition] = useState(0)
  const [isMobile, setIsMobile] = useState(
    window.screen.width <= 1100 ?
      true :
      false
  )

  if (typeof window !== "undefined") {
    window.onscroll = () => setTopPosition(window.scrollY)
  }

  return(
    <section className={
      topPosition > 30 ? 
      "flex justify-between items-center 2sm:px-8 px-4 2sm:py-3 py-1 fixed top-0 bg-base-4 w-full z-10 drop-shadow-md transition-all" : 
      "flex justify-between items-center 2sm:px-8 px-4 2lg:py-8 2sm:py-3 py-1 fixed top-0 w-full z-10 transition-all"
      }>
      <Links />
      <div className={
      topPosition > 30 ? 
      "flex items-center scale-[0.8] transition-all" : 
      "flex items-center scale-100 transition-all"
      }>
        {
        isMobile ? 
         <LogoSmaller /> :
         <Logo />
      }
      </div>
      <div className="flex 2sm:gap-4 sm:gap-20 xs-gap-6 gap-2 items-center">
        <div className={
          typeof window === "undefined" ?
          '' :
          topPosition > 30 &&
          window.screen.width < 540 ? 
          'hidden' :
          'block'
        }>
          <Subtitle />
        </div>
        <Contacts />
        <MenuButton />
      </div>
    </section>
  )
}

export default Navbar