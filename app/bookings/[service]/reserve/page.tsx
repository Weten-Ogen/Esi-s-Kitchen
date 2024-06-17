import { auth } from '@/auth'
import PackForm from '@/components/custom/packform'
import { redirect } from 'next/navigation';
import React from 'react'

export default async function Reserve() {
  const session = await auth();
  if(session === null) {
    return redirect("/")
  }
  return (
    <div className=' py-20 flex px-4  items-center justify-center'>
        <div className='bg-orange-500 rounded-lg p-4 w-full'>
            <PackForm/>
        </div>
    </div>
  )
}
