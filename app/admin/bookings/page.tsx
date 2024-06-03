import { auth } from '@/auth'
import prisma from '@/lib/prisma'
import React from 'react'
import BookComp from '../bookComp';
import { bookdata } from '@/next';
import DataTable from '@/components/ui/data-table';
import { columns } from './column';
export default async function AdminBookings(){

   const session = await auth();
   const id = session?.user.id
   const user = await prisma.user.findUnique({
    where:{
      id: id
    },
    include:{
      bookings:true
    }
   })
   const bookings:bookdata[] | undefined = user?.bookings
   if(!session){
    return <div className='pt-20 flex text-2xl capitalize items-center justify-center '> You need to login first!... </div>
   }
  return (
    <section className="pt-20  ">
      {/* {
        bookings &&
      <div>
        <BookComp className="pt-10" data={bookings}/>
      </div>

      } */}
      {
        bookings &&
      <div>
        <DataTable columns={columns} data={bookings}/>
      </div>
      }
    </section>
  )
}
