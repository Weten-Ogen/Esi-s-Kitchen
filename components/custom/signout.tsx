"use client"
import React from 'react'
import { Button } from '../ui/button'
import { googleSignOut } from '@/app/actions/actions'
import { useFormStatus } from 'react-dom'
import { Loader } from 'lucide-react'
import {useRouter} from 'next/navigation'
import { toast } from 'sonner'

export default function SignOutBtn() {
  const router = useRouter()
  const {pending} = useFormStatus();
  
  const handlesignout = async() => {
      await  googleSignOut()
      router.refresh()
      toast.success('logged out successfully')
  }
  return (
    <form> 
      <Button
      onSubmit={handlesignout}
      className='tracking-wide text-lg ' 
      variant={"outline"} 
      type="submit" > 
      log out
      </Button>
    </form>
  )
}
