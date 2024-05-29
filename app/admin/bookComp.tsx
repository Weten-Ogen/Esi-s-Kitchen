import { bookdata } from '@/next'
import React from 'react'
import BookItem from './bookItem'
import { cn } from '@/lib/utils'

interface pageprops {
    data: bookdata[]
    className:string
}
export default function BookComp({data,className}:pageprops) {
  return (
    <div className={cn('w-full',className)}>
        <div className="grid p-4 lg:p-0 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto  w-full gap-4 items-center">
            {data.map((item:bookdata) => <BookItem {...item}/>
            )}
        </div>
    </div>
  )
}
