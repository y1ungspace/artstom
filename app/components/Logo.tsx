'use client';

import Image from "next/image";
import { useRouter } from "next/navigation";

const Logo: React.FC = () => {

  const router = useRouter();

  return(
    <div className="w-[50px] h-[50px] p-[4px] pt-[7px]">
      <Image
        onClick={() => router.push('/pages/home')}
        className="hidden md:block cursor-pointer" 
        src="/images/logo.png" 
        height="50" 
        width="50" 
        alt="Logo" 
        />
    </div>
  )
}

export default Logo;