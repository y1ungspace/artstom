const Sections: React.FC = () => {
  return(
    <nav className="flex justify-around text-base-2 h-8">
      <button type="button" className="uppercase hover:text-base-1">Услуги</button>
      <button type="button" className="uppercase hover:text-base-1">Цены</button>
      <button type="button" className="uppercase hover:text-base-1">Специалисты</button>
      <button type="button" className="uppercase hover:text-base-1">Галерея</button>
      <button type="button" className="uppercase hover:text-base-1">Контакты</button>
    </nav>
  )
}

export default Sections;