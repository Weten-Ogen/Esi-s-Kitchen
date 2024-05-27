
import React from 'react'
import { auth } from '../auth'
import prisma from '@/lib/prisma';
import BookComp from './bookComp';
import { bookdata } from '@/next';

export default async function Admin() {
  const session = await auth();
  const bookings:bookdata[] = await prisma.booking.findMany();
  
  return (
    <section className="">
      <article className="pt-16">
        <h2>Admin Page</h2>
        <div className="">
          <BookComp className='rounded-lg    '  data={bookings}/>
        </div>
        <ul>
          
        </ul>
      </article>
    </section>
  )
}
