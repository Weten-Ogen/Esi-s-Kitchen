"use client"
import { dropdown } from '@/next'
import React from 'react'
import { DropdownMenu,DropdownMenuItem,DropdownMenuGroup,DropdownMenuContent,DropdownMenuSeparator,DropdownMenuTrigger, } from '../ui/dropdown-menu'
import { Menu ,SidebarClose} from 'lucide-react'
import { DropdownMenuLabel } from '@radix-ui/react-dropdown-menu'
import { cn } from '@/lib/utils'
import NavLinks from './navlinks'

export default function DropDown({className}:dropdown) {
  return (
    <DropdownMenu className={cn('',className)}>
      <DropdownMenuTrigger>
            <Menu/>
      </DropdownMenuTrigger>
      <DropdownMenuContent  className="px-4">
        <DropdownMenuLabel className='text-orange-500 font-bold whitespace-normal flex items-end justify-center'>Esi's kitchen</DropdownMenuLabel>
        <DropdownMenuSeparator/>
        <DropdownMenuItem  className='hover:bg-orange-500 hover:text-white text-orange-500'>
          <NavLinks name="home" reff="/" className='capitalize text-lg tracking-wider '/>
        </DropdownMenuItem>
        <DropdownMenuItem >
          <NavLinks name="dashboard" reff="/dashboard" className=''/>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <NavLinks name="bookings" reff="/bookings" className=''/>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <NavLinks name="dishes" reff="/dish" className=''/>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <NavLinks name="settings" reff="/settings" className=''/>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <NavLinks name="admin" reff="/admin" className=''/>
        </DropdownMenuItem>
        
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
