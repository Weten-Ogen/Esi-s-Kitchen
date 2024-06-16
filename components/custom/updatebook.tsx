"use client"
import React from 'react'
import { Dialog,DialogContent,DialogClose,DialogTrigger, DialogFooter } from '../ui/dialog'
import UpdateBookForm from './updatebooking'
import { bookdata } from '@/next'
import { fetchbooking } from '@/app/actions/actions'
import { Button } from '../ui/button'

interface comprops  {
 id : string,

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
    
      <Dialog >
          <DialogTrigger  className='text-center  text-red-600 w-full bg-white tracking-widest capitalize py-2 rounded-lg'>
              <>update</>
          </DialogTrigger>
          <DialogContent className='bg-orange-500 mx-auto w-np[90%]  '>
                   <div className="">
                    { <UpdateBookForm id={id} data={data}/>}
                   </div>
          </DialogContent>
          
          
      </Dialog>
  )
}
