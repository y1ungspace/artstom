const Links: React.FC = () => {
  return(
    <nav className="flex text-xs font-medium uppercase max-h-[37px] gap-7">
    <a href="/pages/services" className="hover:text-base-2 transition-all duration-300">Услуги</a>
    <a href="/pages/prices" className="hover:text-base-2 transition-all duration-300">Прайс-лист</a>
    <a href="/pages/specialists" className="hover:text-base-2 transition-all duration-300">Врачи</a>
    <a href="/pages/gallery" className="hover:text-base-2 transition-all duration-300">Галерея</a>
    <a href="/pages/contacts" className="hover:text-base-2 transition-all duration-300">Контакты</a>
  </nav>
  )
}

export default Links