'use client'

import Image from "next/image";
import { useRouter } from "next/navigation";

const LogoSmaller: React.FC = () => {

  const router = useRouter()

  return(
    <div className="flex flex-col items-center scale-100 transition-all">
      <Image
        onClick={() => router.push('/pages/home')}
        className="md:block cursor-pointer p-1" 
        src="/images/logo.png" 
        height="50" 
        width="50" 
        alt="Logo" 
        />
    </div>
  )
}

export default LogoSmaller;