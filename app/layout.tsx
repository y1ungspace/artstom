import { Providers } from './GlobalRedux/provider';
import Navbar from './components/navbar/Navbar';
import './globals.css'
import { Inter} from 'next/font/google'

export const metadata = {
  title: 'Артстом',
  description: 'Артстом',
}

const fontInter = Inter({
  subsets: ["latin"],
  weight: '300'
})


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={fontInter.className + ' mx-auto'}>
        <Providers>
          <Navbar />
          {children}
        </Providers>
      </body>
    </html>
  )
}
