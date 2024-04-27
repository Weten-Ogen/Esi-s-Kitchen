import { cn } from '@/lib/utils'
import { servicecard } from '@/next'
import React from 'react'
import Btn from '../general/btn'

export default function ServiceCard({comment,name,className}:servicecard) {
  return (
    <div className={cn('bg-orange-500 rounded-[2px] space-y-2 p-8',className)}>
        <h3 className="">{name}</h3>
        <p className=''>{comment}</p>
        <Btn name='Book now' className='tracking-wide text-sm ring-1 ring-orange-500 hover:-translate-y-0.5 duration-500 ease-out hover:text-orange-500  '  vatype='outline'/>
    </div>
  )
}
