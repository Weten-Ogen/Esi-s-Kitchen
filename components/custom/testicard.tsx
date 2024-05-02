import { cn } from '@/lib/utils'
import { testicard } from '@/next'
import Image from 'next/image'
import React from 'react'

export default function TestiCard({imageurl,className,comment}:testicard) {
  return (
    <div className={cn('rounded-lg my-2   relative text-white px-4 ',className)}>
      <div className="w-full h-[50vh] md:h-[60vh] object-contain overflow-hidden ">
        <Image 
            src={imageurl}
            alt={`${imageurl}`}
            width={500}
            height={500}
            className="w-full rounded-sm object-cover"
        />

      </div>
      <div className='relative  shadow-xl shadow-secondcolor      h-[20vh] rounded-b-lg'>
        <p className="text-white text-md  bg-orange-400 text-clip text-center font-medium rounded-b-lg p-1 tracking-wide w-full h-[20vh] ">" {comment} "</p>
      </div>
    </div>
  )
}
