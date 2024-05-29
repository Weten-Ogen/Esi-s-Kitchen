import { auth } from '@/auth'
import prisma from '@/lib/prisma'
import React from 'react'

export default async function AdminBookings(){
   const session = await auth();
   if(!session){
    return <div className='pt-20 flex text-2xl capitalize items-center justify-center '> You need to login first!... </div>
   }
  return (
    <section className="pt-20  ">
      <div></div>
    </section>
  )
}
