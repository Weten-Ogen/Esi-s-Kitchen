import { cn } from '@/lib/utils'
import { testicard } from '@/next'
import Image from 'next/image'
import React from 'react'

export default function TestiCard({imageurl,className,comment}:testicard) {
  return (
    <div className={cn('rounded-lg my-10 shadow-xl relative text-white p-2 ',className)}>
      <div className="w-full h-[50vh] md:h-[70vh] object-contain overflow-hidden">
        <Image 
            src={imageurl}
            alt={`${imageurl}`}
            width={500}
            height={500}
            className="w-full bg-scroll object-cover"
        />

      </div>
      <div className='relative  '>
        <p className="text-white text-md absolute bg-orange-400 text-clip text-center font-medium rounded-b-lg p-2 m-2  -top-20 tracking-wide">" {comment} "</p>
      </div>
    </div>
  )
}
