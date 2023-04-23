import { Inter, Oswald} from 'next/font/google'

const fontInter = Inter({
  subsets: ["latin"],
  weight: '200'
})

const fontOswald = Oswald ({
  subsets: ["latin"],
  weight: '400'
});

const Title: React.FC = () => {
  return(
    <div>
      <h1 className={"text-xl " + fontOswald.className}>Потапкин Артём Владленович</h1>
      <h2 className={"text-sm text-base-2 leading-none " + fontInter.className}>все виды лечения, протезироване, имплантация</h2>
    </div>
  )
}

export default Title