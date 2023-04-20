import Contacts from "./Contacts"
import Divider from "./Divider"
import Logo from "./Logo"
import MenuButton from "./MenuButton"
import Sections from "./Sections"
import Title from "./Title"

const Navbar: React.FC = () => {
  return(
    <section className="sticky top-0 bg-base-4/80">
      <div className="flex px-3 py-1">
        <div className="flex items-center gap-4">
          <Logo />
          <Divider />
          <Title />
        </div>
        <div className="flex gap-4 ml-auto">
          <Contacts />
          <MenuButton />
        </div>
      </div>
      {/* <Sections /> */}
    </section>
  )
}

export default Navbar