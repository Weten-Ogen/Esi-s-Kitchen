"use client"
import React from 'react'
import { Dialog,DialogContent,DialogClose,DialogTrigger } from '../ui/dialog'
import UpdateBookForm from './updatebooking'
import { bookdata } from '@/next'
import { fetchbooking } from '@/app/actions/actions'

interface comprops {
 id : string
}0
export default function UpdateDialog({id}:comprops) {
  const [data, setData] = React.useState<bookdata | null>()
  const handledata = async() => {
    const fetchdata = await fetchbooking(id);
    setData(prev => prev = fetchdata)
  }
  React.useEffect(() => {
    handledata()
    
  },[])


  return (
    <div className='p-6 md:p-0 w-full'>
      <Dialog >
          <DialogTrigger>
                      update
          </DialogTrigger>
          <DialogContent className="p-4">
                    {data &&  <UpdateBookForm  data={data}/>}
          </DialogContent>
      </Dialog>
    </div>
  )
}
