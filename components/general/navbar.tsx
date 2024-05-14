"use client"
import Image from "next/image";
import DropDown from "../custom/navdropdown";
import NavLinks from "../custom/navlinks";
import Logo2 from '@/public/logo2.png'
import AvaTar from "../custom/avaatar";
import { useSession } from "next-auth/react";
import SignInBtn from "../custom/signin";



export default function NavBar() {
  

  return (
    <nav className="flex justify-between gap-4 items-center  fixed w-full top-0 z-20 bg-slate-900 md:px-6">
        <header className= "p-2">
        <NavLinks className="cursor-pointer" reff={"/"}>
              <Image
              src={Logo2}
              alt="logo"
              width={50}
              height={50}
              className="cursor-pointer"
              />
            </NavLinks>
        </header>
     
        <>
        {/* {
          !session.data?.user ? 
          <SignInBtn/>
           :
          <div className="flex items-center  ml-auto">
            <DropDown/>

            <AvaTar 
            imageurl={session.data?.user?.image}
            name={session.data?.user?.name} 
            className="m-2"
          />

          </div>
        } */}
        </>

  
    </nav>
  )
}
