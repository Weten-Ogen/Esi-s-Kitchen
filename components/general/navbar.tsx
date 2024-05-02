import Image from "next/image";
import DropDown from "../custom/navdropdown";
import NavLinks from "../custom/navlinks";
import Logo2 from '@/public/logo2.png'
import AvaTar from "../custom/avaatar";
import { Home } from "lucide-react";


export default function NavBar() {

  return (
    <nav className="flex justify-between items-center  fixed w-full top-0 z-20 bg-slate-900 md:px-6">
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
        <div>
          <Home/>
          
        </div>
        <div className="flex items-center  gap-2">
        <AvaTar name="Marcus" className=""
        />
          <ul className="hidden md:flex items-center gap-3 text-orange-400 " >
            <NavLinks
             name="home" 
            reff="/" className="capitalize text-lg opacity-70 hover:opacity-90   ease-out duration-500  hover:-translate-y-0.5  tracking-wider "/>
            <NavLinks
             name="about" 
            reff="/about" className="capitalize text-lg opacity-70 hover:opacity-90   ease-out duration-500  hover:-translate-y-0.5  tracking-wider "/>
            <NavLinks
             name="bookings" 
            reff="/bookings" 
            className="capitalize text-lg opacity-70 hover:opacity-90   ease-out duration-500  hover:-translate-y-0.5  tracking-wider "/>
            <NavLinks
             name="admin" 
            reff="/admin" className="capitalize text-lg opacity-70 hover:opacity-90   ease-out duration-500  hover:-translate-y-0.5  tracking-wider "/>
            
          </ul>
          <ul className="md:hidden mr-4">
              <DropDown />
          </ul>
        </div>

    </nav>
  )
}
