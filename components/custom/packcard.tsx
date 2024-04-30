import { packcard } from '@/next'
import Image from 'next/image'
import React from 'react'
import Btn from '../general/btn'
import Diamond from '@/public/images/eat.jpg'
import NavLinks from './navlinks'



export default function PackCard({name,items,price,imageurl}:packcard) {
  return (
    <div className="m-4 rounded-md shadow-md shadow-orange-400 p-4 relative">

      <div className=" object-contain w-full overflow-hidden h-[40vh] relative rounded-t-md">
          <Image 
          
          src={imageurl} 
          alt={`${Diamond}`}
          width={500}
          height={500}
          className='w-full bg-scroll object-cover rounded-t-md' />
      </div>
          <div className='relative'>
            <div className='grid grid-cols-1 text-wrap'>
                <h2 className='text-xl font-bold tracking-wider uppercase text-orange-500  text-center'>
                    {name} package
                </h2>
                <p className='text-white bg-orange-500 rounded-lg uppercase text-md text-center md:text-lg text-clip whitspace-normal'>{price} ghc per head</p>
            </div>
            <ul className='grid grid-cols-2 '>
                {items.map((item,i) =><li className='text-slate-900  text-wrap capitalize tracking-wider font-bold px-2 list-inside list-decimal whitespace-normal' key={i}>{item}</li>)}
            </ul>
            <div className='my-4 py-4'/>
          </div>
          <div className='w-full mx-auto md:absolute md:bottom-5 px-4'>
            <NavLinks  reff={'/bookings/*/reserve'}>
            <Btn  name='book now' className='bg-secondcolor text-lg outline-orange-500 hover:bg-secondcolor hover:text-white ease-out duration-500  w-full md:w-[50%] '
            vatype='default'>
            </Btn>
            </NavLinks>
          </div>
    </div>
  )
}
