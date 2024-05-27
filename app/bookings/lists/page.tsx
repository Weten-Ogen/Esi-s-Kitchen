import BookComp from '@/app/admin/bookComp';
import { auth } from '@/app/auth';
import prisma from '@/lib/prisma'
import React from 'react'

export default async function BookingLists() {
  const session = await auth();
  const user = session?.user.id
  const uniquser = await prisma.user.findUnique({
    where: {
        id: user
    },include:{
        bookings:true
    }
  })
  console.log(uniquser?.bookings)
    return (
    <div>
        <BookComp className=''  data={uniquser?.bookings!}/>
    </div>
  )
}
