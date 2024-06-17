import RedPic from '@/public/images/redpack.jpg'
import React from 'react'
import ServiceCard from '@/components/custom/servicecard'
import Image from 'next/image'
import Footer from '@/components/general/footer'
import { auth } from '../../auth'
import { redirect } from 'next/navigation'


export  default async function Bookings(){
  const session = await auth();
  if(session) {
    redirect('/')
  }
  return (
    <section className='mt-20'>
      <article className="grid grid-cols-1 md:grid-cols-2 overflow-hidden md:h-[70vh]">

        <div className='p-4'>

          <h2 className="text-orange-500 text-2xl">hello,</h2>
          <p className='text-lg font-medium text-justify whitespace-normal'>thank you for choosing us, we have carefully curiated and grouped various dishes to suit your taste and prefrences.</p>
          <p className='text-lg font-medium text-justify whitespace-normal my-4'>70% payments is required for booking, clients are free to swap or add dishes from our menu to their preferred package. But note that some dishes attract extra charges. no major changes can be made four days to the event.</p>
          <p className='text-lg font-medium text-justify whitespace-normal my-4'>Platinum, Diamond, Esi's Special  and Heritage packages serves 120 heads.</p>
          <p className='text-lg font-medium text-justify whitespace-normal my-4'>Ghc 5,000 for service fee and transporation within Accra Metropolitan.</p>
          <p className='text-lg font-medium text-justify whitespace-normal my-4'>Location outside Accra comes with extra charges.</p>
          <p className='text-lg font-medium text-justify whitespace-normal my-4'>Delay Charge: Ghc 150/hour </p>
        </div>
        <div className=''>
          <Image 
          src={RedPic} 
          alt="redpack image"
          width={500}
          height={500} 
          className='h-auto w-full'
          />
        </div>
      </article>
      <div className=" p-4 md:p-0  grid grid-cols-1 md:grid-cols-3 gap-4 my-5">
          <ServiceCard 
          reff="/bookings/buffet"
          name="buffet service"
           comment="engagement and wedding refreshments"/> 
          <ServiceCard 
          reff="/bookings/full_option"
          name="full option buffet service" 
          comment="we plan, execute and manage  your event to completion"/>   
          <ServiceCard   
          reff="/bookings/" 
          name="packed service" 
          comment="for that snappy taste and refreshments"/>    
      </div>
            
      <Footer/>      
    </section>
  )
}
