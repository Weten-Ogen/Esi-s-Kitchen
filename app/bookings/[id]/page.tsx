import PackForm from '@/components/custom/packform';
import { singlebook } from '@/next'
import React from 'react'

export default function SingleBooking({params}:singlebook) {
  const {id} = params;
  return (
    <div className="font-bold text-4xl ">
      <div className='p-8'>
        <div className="text-xl">
            {id} package
        </div>
        <PackForm/>
      </div>
    </div>
  )
}
