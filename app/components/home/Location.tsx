const Location: React.FC = () => {
  return(
    <section 
      className='
        xl:w-[1100px]
        w-[calc(100%_-_50px)]
        mx-auto
        rounded-3xl
        text-center
        mt-32
        '>
      <h1 className="text-4xl font-bold">До нас легко добраться</h1>
      <h3 className="text-lg font-medium opacity-80 w-[700px] mx-auto pb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo quis dolores ab animi esse? Facere molestiae, voluptates repudiandae sapiente ut sit aliquid, quos libero, atque distinctio recusandae dolore eius illum?</h3>
      <div style={{position: 'relative', overflow: 'hidden'}}>
        <a 
          href="https://yandex.ru/maps/org/artstom/27705467946/?utm_medium=mapframe&utm_source=maps" 
          style={{color: '#eee', fontSize: '12px', position: 'absolute', top: '0px'}}
          >
        </a>
        <iframe 
          className="w-full rounded-3xl"
          src="https://yandex.ru/map-widget/v1/?ll=20.433009%2C54.715916&mode=search&oid=27705467946&ol=biz&z=17" 
          width="1200" 
          height="400"  
          style={{position: "relative"}}
          >
        </iframe>
      </div>
    </section>
  )
}

export default Location