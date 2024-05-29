"use client"
import { bookdata } from '@/next'
import React from 'react'

export default function BookItem({name,contact,createdAt,date,email,id,occassion,packages,population,time,updatedAt,userId,venue,tel
}:bookdata) {

  const acttime = parseInt(time.slice(0,2)) > 12 ? 'PM': 'AM';
  return (
    <div className='w-full bg-orange-500 rounded-lg'>
        <div className='p-2'>
            <div className='flex flex-col items-center  py-2'>
            <h2 className="capitalize text-lg text-white font-bold tracking-wider"> {name}</h2>
            {email && <p className='tracking-wide italic'>{email}</p>}
            </div>
            <p className="capitalize text-lg tracking-wider whitespace-normal font-bold text-center">{occassion}</p>
            <div className='flex items-center gap-2 '>
              <p className="capitalize /77">package type:</p>
              <p>{packages}</p>
            </div>
            <div className=''>
            <p>population</p>
            <p>{population}</p>
            </div>
            <div className='flex items-center gap-2'>
              <p className='capitalize text-lg font-bold'>venue</p>
              <p>{venue}</p>
            </div>
            <div className='flex items-center gap-2'>
            <p className='capitalize text-lg font-bold'>time</p>
            <p>{time + " " + acttime}</p>
            </div>
            <div className='flex items-center gap-2'>
              <p className='capitalize text-lg font-bold'>date</p>
              <p className=''>{date}</p>
            </div>
        </div>
    </div>
  )
}
