import Image from "next/image";
import DropDown from "../custom/navdropdown";
import NavLinks from "../custom/navlinks";
import Logo2 from '@/public/logo2.png'
import AvaTar from "../custom/avaatar";
import { Clipboard, ClipboardCheck, Home,Server,ShoppingBag,ShoppingCart, Users } from "lucide-react";


export default function NavBar() {

  return (
    <nav className="flex md:justify-between gap-4 items-center  fixed w-full top-0 z-20 bg-slate-900 md:px-6">
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
        <div className="flex items-center gap-6 md:hidden text-secondcolor"> 
        <NavLinks reff="/">
          <Home 
          className="" 
          size={30}
          />
        </NavLinks>
        <NavLinks reff="/about">
          <Users 
          className="" 
          size={30}
           />
        </NavLinks>
        <NavLinks reff="/bookings">
          <ClipboardCheck 
          className="" 
          size={30}
          />

        </NavLinks>
        <NavLinks reff="/admin">
          <Server size={30}/>
        </NavLinks>
        </div>
        <div className="flex items-center  ml-auto">
        
          <ul className="hidden md:flex items-center gap-6 text-secondcolor " >
            <NavLinks
             name="home" 
            reff="/" className="capitalize text-lg opacity-70 hover:opacity-90   ease-out duration-500  hover:-translate-y-0.5  tracking-wider "/>
            <NavLinks
             name="about" 
            reff="/about" className="capitalize text-lg opacity-70 hover:opacity-90   ease-out duration-500  hover:-translate-y-0.5  tracking-wider "/>
            <NavLinks
             name="bookings" 
            reff="/bookings" 
            className="capitalize text-lg opacity-70 hover:opacity-90   ease-out duration-500  hover:
            -translate-y-0.5  tracking-wider "/>
            <NavLinks
             name="admin" 
            reff="/admin" className="capitalize text-lg opacity-70 hover:opacity-90   ease-out duration-500  hover:-translate-y-0.5  t
            racking-wider "/>
            
            
          </ul>
          <ul className="md:hidden ">
              <DropDown />
          </ul>
          <AvaTar 
          name="Marcus" 
          className="m-2"
        />
        </div>

  
    </nav>
  )
}
