import { cn } from '@/lib/utils'
import { testicard } from '@/next'
import Image from 'next/image'
import React from 'react'

export default function TestiCard({imageurl,className,comment}:testicard) {
  return (
    <div className={cn('rounded-lg bg-primecolor text-white p-2',className)}>
        <Image 
            src={imageurl}
            alt={`${imageurl}`}
            width={500}
            height={400}
            sizes={"100"}
            className="w-full"
        />
        <p className="">{comment}</p>
    </div>
  )
}
