import { cn } from '@/lib/utils'
import { servicecard } from '@/next'
import React from 'react'
import Btn from '../general/btn'
import NavLinks from './navlinks'

export default function ServiceCard({comment,name,className}:servicecard) {
  return (
    <div className={cn('bg-orange-500 bg-gradient-to-l from-secondarycolor to-orange-600 rounded-[2px] space-y-2 p-8',className)}>
        <h3 className="">{name}</h3>
        <p className=''>{comment}</p>
        <Btn  className='tracking-wide text-sm ring-1 ring-orange-500 hover:-translate-y-0.5 duration-500 ease-out hover:text-orange-500'  vatype='default'>
          <NavLinks name='book now' reff='/bookings' />
        </Btn>
    </div>
  )
}
