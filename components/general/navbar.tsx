import Image from "next/image";
import DropDown from "../custom/navdropdown";
import NavLinks from "../custom/navlinks";
import Logo2 from '@/public/logo2.png'

export default function NavBar() {

  return (
    <nav className="flex justify-between items-center py-2 sm:py-4 sm:px-12 px-4 border border-bottom fixed w-full top-0 z-20 ">
        <header>
            <NavLinks reff="/">
              <Image
              src={Logo2}
              alt="logo"
              width={50}
              height={50}
              />
            </NavLinks>
        </header>
        <ul >
            <NavLinks 
               >
                <DropDown />
            </NavLinks>
            
             
        </ul>

    </nav>
  )
}
