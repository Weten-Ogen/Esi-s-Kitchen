"use client"
import React from 'react'
import { Button } from '../ui/button'
import { googleSignOut } from '@/app/actions/actions'
import { useFormStatus } from 'react-dom'
import { Loader } from 'lucide-react'
import {usePathname} from 'next/navigation'
import { toast } from 'sonner'

export default function SignOutBtn() {
  const pathname = usePathname()
  const {pending} = useFormStatus();
  const handlesignout = async() => {
    await googleSignOut(pathname)
    toast.success('logged out successfully.')
  }

  return (
      <Button
      onClick={handlesignout}
      className='tracking-wide text-lg ' 
      variant={"outline"} 
      type="button" > 
      log out
      </Button>
  )
}
