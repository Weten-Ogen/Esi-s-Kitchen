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
    <div className={cn('',className)}>
        <div className="grid-cols-3 gap-3 items-center">
            {data.map((item:bookdata) => <BookItem {...item}/>
            )}
        </div>
    </div>
  )
}
