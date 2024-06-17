import React from 'react'
import BookComp from '../../bookComp'
import prisma from '@/lib/prisma'
import { auth } from '@/auth'
import { bookdata } from '@/next'
import DataTable from '@/components/ui/data-table'
import { columns } from '../column'
interface pageprops {
    params: {
        slug: string
    }
}
async function SinglebookingPage({params}:pageprops) {
  const session = await auth()
  const id = session?.user.id
   const user = await prisma.user.findUnique({
    where:{
      id: id
    },
    include:{
      bookings:true
    }
   })
  const slug =  params.slug
  const bookings:bookdata[] | undefined  = user?.bookings 
  
  if(slug === "table") {
    return (
      <section className='pt-24'>
        <div>
            {
              bookings &&
            <div>
              <BookComp className="pt-10" data={bookings}/>
            </div>

            } 
        </div>
      </section>
    )
  }
  if(slug=== "card") {

    return (
      <section className="pt-24">
        <div className="">
          {
            bookings &&
          <div>
            <DataTable columns={columns} data={bookings}/>
          </div>
          }
        </div>
      </section>
    )
  }
}

export default SinglebookingPage
