"use client"
import React from 'react'
import { Button } from '../ui/button'
import { googleSignOut } from '@/app/actions/actions'
import { useFormStatus } from 'react-dom'
import { Loader } from 'lucide-react'
import {useRouter} from 'next/navigation'

export default function SignOutBtn() {
  const router = useRouter()
  const {pending} = useFormStatus();
  return (
    <form action={googleSignOut}> 
      <Button
      className='tracking-wide text-lg ' 
      variant={"outline"} 
      type="submit" > 
      log out
      </Button>
    </form>
  )
}
