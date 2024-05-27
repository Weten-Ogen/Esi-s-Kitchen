"use client"
import { bookdata } from '@/next'
import React from 'react'

export default function BookItem({name,contact,createdAt,date,email,id,occassion,packages,population,time,updatedAt,userId,venue,tel
}:bookdata) {
  return (
    <div className=''>
        <div className='p-2'>
            <div className='flex items-center gap-4'>
            <h2>{name}</h2>
            <p>{occassion}</p>
            </div>
            <p>{email}</p>
            
            <p>{contact}</p>
            <p>{tel}</p>
            <p>{packages}</p>
            <p>{population}</p>
            <p>{venue}</p>
            <p>{time}</p>
            <p>{date}</p>
        </div>
    </div>
  )
}
