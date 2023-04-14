import Contacts from "./Contacts"
import Divider from "./Divider"
import Logo from "./Logo"
import MenuButton from "./MenuButton"
import Title from "./Title"

const Navbar: React.FC = () => {
  return(
    <>
      <Logo />
      <Divider />
      <Title />
      <Contacts />
      <MenuButton />
    </>
  )
}

export default Navbar