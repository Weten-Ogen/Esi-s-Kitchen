"use client"
import { dropdown } from '@/next'
import React from 'react'
import { DropdownMenu,DropdownMenuItem,DropdownMenuGroup,DropdownMenuContent,DropdownMenuSeparator,DropdownMenuTrigger, DropdownMenuRadioGroup, } from '../ui/dropdown-menu'
import { Menu } from 'lucide-react'
import { DropdownMenuLabel } from '@radix-ui/react-dropdown-menu'
import { cn } from '@/lib/utils'
import NavLinks from './navlinks'
import SignOutBtn from './signout'


export default function DropDown({className}:dropdown) {
  const [position , setPosition] = React.useState('up');
  return (
    <div className={cn(' w-full ',className)}>

    <DropdownMenu >
      <DropdownMenuTrigger asChild>
            <Menu
            size={25} 
            className='text-orange-500  font-bold '/>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-full ">
        <DropdownMenuLabel className='font-bold text-lg text-orange-500 tracking-wider whitespace-normal'>Esi's kitchen</DropdownMenuLabel>
        <DropdownMenuSeparator/>
        <DropdownMenuRadioGroup>

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
          <DropdownMenuItem className='text-lg tracking-wider whitespace-normal'>
            <SignOutBtn/>
          </DropdownMenuItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
    </div>
  )
}
