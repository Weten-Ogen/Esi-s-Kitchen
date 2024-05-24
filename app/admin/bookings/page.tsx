import prisma from '@/lib/prisma'
import React from 'react'

export default async function AdminBookings(){
   const bookings = await  prisma.bookings.findMany({})
   
  return (
    <section>
      <div>{JSON.stringify(bookings)}</div>
    </section>
  )
}
