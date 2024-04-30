import { cn } from '@/lib/utils'
import { servicecard } from '@/next'
import React from 'react'
import Btn from '../general/btn'
import NavLinks from './navlinks'

export default function ServiceCard({comment,name,className}:servicecard) {
  return (
    <div className={cn('bg-orange-400 bg-gradient-to-r from-secondarycolor to-orange-300 shadow-lg relative rounded-[2px]  p-10',className)}>
        <h3 className="text-xl font-bold text-white capitalize tracking-wider whitespace-normal text-clip">{name}</h3>
        <p className='whitespace-normal tracking-wider text-lg text-clip px-2 text-pretty my-3'>
          {comment}
          </p>
          <NavLinks  className="absolute -bottom-2  my-4 px-2" reff='/bookings' >
          <Btn name='book now' className={cn('bg-secondcolor hover:bg-secondcolor opacity-70 hover:opacity-100 text-clip tracking-wide px-8 py-2 text-lg hover:text-white shadow-lg ease-out duration-500 hover:-translate-y-0.5 ',className)} />
          </NavLinks>
    </div>
  )
}
