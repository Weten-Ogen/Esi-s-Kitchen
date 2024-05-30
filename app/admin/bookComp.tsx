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
    <div className={cn('  w-full p-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-4',className)}>
            {data.map((item:bookdata) => <BookItem key={item.id} {...item}/>
            )}
    </div>
  )
}
