import prisma from '@/lib/prisma'
import React from 'react'

export default async function AdminBookings(){
   const bookings = await  prisma.bookings.findMany({})
   console.log(bookings)
  return (
    <section>

    </section>
  )
}
