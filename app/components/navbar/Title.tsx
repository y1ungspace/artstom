import { Inter } from 'next/font/google'

const fontInter = Inter({
  subsets: ["latin"],
  weight: '200'
})

const Title: React.FC = () => {
  return(
    <div>
      <h1 className="text-xl">Потапкин Артём Владленович</h1>
      <h2 className={"text-sm text-base-2 leading-none " + fontInter.className}>все виды лечения, протезироване, имплантация</h2>
    </div>
  )
}

export default Title