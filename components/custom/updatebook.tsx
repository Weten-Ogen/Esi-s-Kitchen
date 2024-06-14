"use client"
import React from 'react'
import { Dialog,DialogContent,DialogClose,DialogTrigger, DialogFooter } from '../ui/dialog'
import UpdateBookForm from './updatebooking'
import { bookdata } from '@/next'
import { fetchbooking } from '@/app/actions/actions'
import { Button } from '../ui/button'

interface comprops {
 id : string
}
export default function UpdateDialog({id}:comprops) {
  const [data, setData] = React.useState<any | null>(null)
  const handledata = async() => {
    const fetchdata = await fetchbooking(id);
    setData((prev:any) => prev = fetchdata)
  }
  React.useEffect(() => {
    handledata()
  },[])


  return (
    <div className='mx-auto w-[80%] m-h-screen md:mx-auto md:w-full md:p-0 p
    -4'>
      <Dialog >
          <DialogTrigger  className='text-center  text-red-600 w-full bg-white tracking-widest capitalize py-2 rounded-lg'>
              <>update</>
          </DialogTrigger>
          <DialogContent className='bg-orange-500 mt-5 '>
                   <div>
                    { <UpdateBookForm id={id} data={data}/>}
                   </div>
                   <DialogClose asChild>
                        <Button className='tracking-widest text-lg uppercase' type="button">cancel</Button>
                   </DialogClose>
          </DialogContent>
          
      </Dialog>
    </div>
  )
}
