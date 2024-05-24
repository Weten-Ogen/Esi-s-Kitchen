import prisma from '@/lib/prisma'
import React from 'react'

export default async function AdminBookings(){
   const bookings = await  prisma.booking.findMany({})
   
  return (
    <section className="pt-20  ">
      <div>{JSON.stringify(bookings)}</div>
    </section>
  )
}
