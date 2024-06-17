import { auth } from '@/auth'
import prisma from '@/lib/prisma'
import React from 'react'
import BookComp from '../bookComp';
import { bookdata } from '@/next';
import DataTable from '@/components/ui/data-table';
import { columns } from './column';
import { redirect } from 'next/navigation';
export default async function AdminBookings(){

   const session = await auth();
   if(session === null){
     redirect("/")
   }
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
   if(session === null){
    return 
   }
  return (
    <section className="pt-20  ">
      
      {
        bookings &&
      <div>
        <DataTable columns={columns} data={bookings}/>
      </div>
      }
    </section>
  )
}
