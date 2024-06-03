
import React from 'react'
import { auth } from "@/auth"
import prisma from '@/lib/prisma';
import BookComp from './bookComp';
import { bookdata } from '@/next';
import AdminSearchForm from './adminsearchform';
import NavLinks from '@/components/custom/navlinks';




export default async function Admin() {
  const session = await auth();
  const bookings:bookdata[] = await prisma.booking.findMany();
  
  if(!session) {
    return <div className='pt-20 flex text-2xl capitalize items-center justify-center '> You need to login first!... </div>
  }
  

  return (
    <section className="pt-20 md:pt-16 ">
      <article className="pt-16">
        <h1 className='text-2xl font-bold tracking-wider capitalize'>Admin Page</h1>

        <div className="pt-10 flex flex-col items-center justify-center  text-lg">
          <NavLinks reff='/admin/users' name='users'/>
          <NavLinks reff='/admin/bookings' name='bookings'/>
        </div>
        <ul>
          
        </ul>
      </article>
    </section>
  )
}
