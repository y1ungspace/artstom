import Logo from "../Logo"
import SocialButtons from "../SocialsButtons"

const Footer: React.FC = () => {
  return(
    <section className="flex flex-col items-center text-base-1/90 mt-16 mb-8" >
      <div className="flex flex-col items-center gap-2">
        <Logo />
        <div className="w-[200px] min-h-[1px] bg-base-1" />
        <h1 className="text-xl">Потапкин Артём Владленович</h1>
      </div>
      <div className="flex min-w-[calc(100%_-_300px)] gap-20 mt-8">
        <div className="flex flex-col self-start w-[350px]">
          <h1 className="py-0.5 hover:text-base-1">Артстом</h1>
          <a 
            className="py-0.5 hover:text-base-1"
            href="https://yandex.ru/maps/org/artstom/27705467946/?from=mapframe&ll=20.432450%2C54.715904&z=16"
            >Калининград, улица Сержанта Мишина, 22А</a>
          <a 
            className="py-0.5 hover:text-base-1 pb-2"
            href="tel:+7911453636">8(911)453-63-62</a>
          <div className="flex gap-3">
            <SocialButtons />
          </div>  
        </div>
        <div className="flex justify-between grow ml-auto">
          <a href="/pages/services" className="py-1 text-left hover:text-base-1">Услуги</a>
          <a href="/pages/prices" className="py-1 text-left hover:text-base-1">Цены</a>
          <a href="/pages/specialists" className="py-1 text-left hover:text-base-1">Специалисты</a>
          <a href="/pages/gallery" className="py-1 text-left hover:text-base-1">Галерея</a>
          <a href="/pages/contacts" className="py-1 text-left hover:text-base-1">Контакты</a>
        </div>
      </div>
    </section>
  )
}

export default Footer