import Navbar from './components/navbar/Navbar';
import './globals.css'
import { Oswald } from 'next/font/google'

export const metadata = {
  title: 'Артстом',
  description: 'Артстом',
}

const font = Oswald ({
  subsets: ["latin"],
});


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
