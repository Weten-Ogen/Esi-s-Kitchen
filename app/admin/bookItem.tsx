"use client"
import { Button } from '@/components/ui/button';
import { bookdata } from '@/next'
import React from 'react'
import { useFormStatus } from 'react-dom';
import { deletebooking, updatebooking } from '../actions/actions';
import { toast } from 'sonner';
import UpdateBookForm from '@/components/custom/updatebooking';
import UpdateDialog from '@/components/custom/updatebook';

export default function BookItem({name,contact,createdAt,date,email,id,occassion,packages,population,time,updatedAt,userId,venue,tel,status
}:bookdata) {

  const acttime = parseInt(time.slice(0,2)) > 12 ? 'PM': 'AM';
  const {pending} = useFormStatus();
  
  const handleDelete = async() => {
    await deletebooking(id)
    toast.success('event deleted successfully.')
  }; 
  
  return (
    <div className='w-full p-4 bg-orange-400 shadow-lg rounded-lg'>
        <div className=''>
          
            <div className='flex flex-col items-center  py-2'>
            <h2 className="capitalize text-lg text-white font-bold tracking-wider"> {name}</h2>
            {email && <p className='tracking-widest  text-md italic'>{email}</p>}
            </div>
            <div className='py-2'>

              <p className="capitalize text-lg tracking-wider whitespace-normal font-bold text-center text-slate-300">{occassion}</p>
              <div className='flex items-center gap-2 '>
                <p className="capitalize text-lg font-bold">package type</p>
                <p className='ml-auto'> {packages}</p>
              </div>
              
              <div className='flex items-center gap-2 '>
                <p className='capitalize flex-start text-lg font-bold'>venue</p>
                <p className='ml-auto'>{venue}</p>
              </div>
              <div className='flex items-center gap-2'>
              <p className='capitalize text-lg font-bold'>time</p>
              <p className='ml-auto'>{time + " " + acttime}</p>
              </div>
              <div className='flex items-center gap-2'>
                <p className='capitalize text-lg font-bold'>date</p>
                <p className='ml-auto'>{date}</p>
              </div>
              <div className='flex items-center gap-2'>
              <p className='text-lg font-bold  capitalize'>population</p>
              <p className='ml-auto'>{population}</p>
              </div>
            </div>
            <div className='text-center'>
              <p className='font-bold text-lg capitalize text-gray-200 tracking-wider'>contacts</p>
              <div className='text-center'>
                <p className=''>{contact}</p>
               
              </div>
            </div>
            <div className='flex items-center gap-4 p-4 text-center'>
                <UpdateDialog id={id} />
              <Button
              disabled={pending}
              onClick={handleDelete} 
              className='w-full bg-secondcolor text-white capitalize  text-lg tracking-wider whitespace-normal hover:bg-secondcolor ' >delete</Button>
            </div>
        </div>
    </div>
  )
}
