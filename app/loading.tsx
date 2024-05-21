import React from 'react'
import { Loader } from 'lucide-react'


export default  function Loading() {
  return (
    <div className='p-40 flex items-center justify-center'>
        <Loader 
        className='animate-spin text-secondcolor text-2xl' 
         size={100} />
    </div>
  )
}
