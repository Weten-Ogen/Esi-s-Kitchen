import BookComp from '@/app/admin/bookComp';
import { auth } from '@/auth';
import prisma from '@/lib/prisma'
import { redirect } from 'next/navigation';
import React from 'react'

export default async function BookingLists() {
  const session = await auth();
  
  const user = session?.user.id;
  
  const uniquser = await prisma.user.findUnique({
    where: {
      id: user
    },include:{
      bookings:true
    }
  })
  
  if(session) {
    redirect("/")
  }

  if( !session ) {
    return <div className='pt-24 flex text-2xl capitalize items-center justify-center '> You need to login first!... </div>
  }
    return (
    <div className="pt-20  w-full  ">
      {
        !(uniquser?.bookings.length === 0)  ?
        <div className='flex flex-col items-center gap-4'>
          <h2 className='text-2xl capitalize tracking-wider  text-center whitespace-normal'>list of events</h2>
          <BookComp 
          className=''  
          data={uniquser?.bookings!}/>  
        </div>
        :
        <p>You do not have any event scheduled.</p>
      }
    </div>
  )
}
