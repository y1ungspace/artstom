'use client'

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

const Logo: React.FC = () => {

  const router = useRouter()

  return(
    <div className="flex flex-col items-center scale-100 transition-all">
      <Image
        onClick={() => router.push('/pages/home')}
        className="hidden md:block cursor-pointer p-1" 
        src="/images/logo.png" 
        height="50" 
        width="50" 
        alt="Logo" 
        />
        <h1 className="text-base-1 uppercase font-extralight text-lg leading-none">Артстом</h1>
    </div>
  )
}

export default Logo;