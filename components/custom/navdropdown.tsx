import { dropdown } from '@/next'
import React from 'react'
import { DropdownMenu,DropdownMenuItem,DropdownMenuGroup,DropdownMenuContent,DropdownMenuSeparator,DropdownMenuTrigger, } from '../ui/dropdown-menu'
import { Menu } from 'lucide-react'
import { DropdownMenuLabel } from '@radix-ui/react-dropdown-menu'
import { cn } from '@/lib/utils'
import NavLinks from './navlinks'

export default function DropDown({className}:dropdown) {
  return (
    <DropdownMenu >
      <DropdownMenuTrigger>
            <Menu
            size={25} 
            className='text-orange-500  font-bold '/>
      </DropdownMenuTrigger>
      <DropdownMenuContent  className="">
        <DropdownMenuLabel className='font-bold text-lg text-orange-500 tracking-wider whitespace-normal'>Esi's kitchen</DropdownMenuLabel>
        <DropdownMenuSeparator/>
        <DropdownMenuItem  className='text-lg tracking-wider whitespace-normal'>
          <NavLinks name="home"  reff="/" />
        </DropdownMenuItem>
        <DropdownMenuSeparator/>
        <DropdownMenuItem className='text-lg tracking-wider whitespace-normal' >
          <NavLinks name="about" reff="/about" className=''/>
        </DropdownMenuItem>
        <DropdownMenuSeparator/>
        <DropdownMenuItem className='text-lg tracking-wider whitespace-normal'> 
          <NavLinks name="bookings" reff="/bookings" className=''/>
        </DropdownMenuItem>
        <DropdownMenuSeparator/>
        
        <DropdownMenuItem className='text-lg tracking-wider whitespace-normal'>
          <NavLinks name="admin" reff="/admin" className=''/>
        </DropdownMenuItem>
        <DropdownMenuSeparator/>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
