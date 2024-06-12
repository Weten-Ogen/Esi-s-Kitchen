"use client"
import React from 'react'
import { Dialog,DialogContent,DialogClose,DialogTrigger } from '../ui/dialog'
import UpdateBookForm from './updatebooking'
import { bookdata } from '@/next'
import { fetchbooking } from '@/app/actions/actions'
import { Button } from '../ui/button'

interface comprops {
 id : string
}0
export default function UpdateDialog({id}:comprops) {
  const [data, setData] = React.useState<bookdata>({})
  const handledata = async() => {
    const fetchdata = await fetchbooking(id);
    setData(prev => prev = fetchdata)
  }
  React.useEffect(() => {
    handledata()
  },[])


  return (
    <div className='mx-auto w-[80%] m-h-screen md:mx-auto md:w-full md:p-0 p-4'>
      <Dialog >
          <DialogTrigger className='text-center   w-full'>
              <Button variant={'outline'} className='text-lg  capitalize  tracking-widest w-full bg-white hover:bg-white text-secondcolor'>update</Button>
          </DialogTrigger>
          <DialogContent>
                    { <UpdateBookForm  data={data}/>}
          </DialogContent>
      </Dialog>
    </div>
  )
}
