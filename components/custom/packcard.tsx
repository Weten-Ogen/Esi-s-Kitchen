import { packcard } from '@/next'
import Image from 'next/image'
import React from 'react'
import Btn from '../general/btn'
import Diamond from '@/public/images/eat.jpg'
import NavLinks from './navlinks'



export default function PackCard({name,items,price,imageurl}:packcard) {
  return (
    <div className=" object-contain relative">
        <Image 
        
        src={imageurl} 
        alt={`${Diamond}`}
        width={500}
        height={500}
        className='w-full' />
        <div className='bg-secondarycolor relative -top-14  px-4 py-2  rounded-lg  shadow-xl'>

          <div className='flex gap-2  relative'>
              <h2 className='flex text-xl text-bgcolor tracking-widest font-bold justify-between space-x-2 uppercase '>
                  <span className='' >{name}</span>
                  <span>package</span>
               </h2>
              <p className='rounded-full absolute -top-10 right-0  bg-tcolor tracking-wider   shadow-lg text-md text-primecolor text-pretty w-26 h-26 px-3 py-2 whitespace-normal font-bold  bg-blend-lighten uppercase'>{price} ghc per head</p>
          </div>

          <ul className='grid grid-cols-3'>
              {items.map((item,i) =><li className='text-slate-900 capitalize tracking-wider font-bold px-2 list-inside list-decimal whitespace-normal' key={i}>{item}</li>)}
          </ul>
          <Btn  
          vatype='outline'>
            <NavLinks name='book now'  reff={ `bookings/${name}`}/>
          </Btn>
        </div>
    </div>
  )
}
