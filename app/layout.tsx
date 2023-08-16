import { Providers } from './GlobalRedux/provider';
import Footer from './components/footer/Footer';
import Navbar from './components/navbar/Navbar';
import './globals.css'
import { Inter} from 'next/font/google'

export const metadata = {
  title: 'Артстом',
  description: 'Артстом',
}

const fontInter = Inter({
  subsets: ["latin"],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
})


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="ru">
      <body className={fontInter.className + ' mx-auto'}>
        <Providers>
          <Navbar />
            {children}
          <Footer />
        </Providers>
      </body>
    </html>
  )
}
