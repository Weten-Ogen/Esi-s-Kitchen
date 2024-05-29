"use client"
import React from 'react'
import { Button } from '../ui/button'
import { googleSignOut } from '@/app/actions/actions'
import { useFormStatus } from 'react-dom'
import { Loader } from 'lucide-react'


export default function SignOutBtn() {
  const {pending} = useFormStatus();
  return (
    <form action={googleSignOut}> 
      <Button
      className='tracking-wide text-lg ' 
      variant={"outline"} 
      type="submit" disabled={pending}>{pending ? 'loading...':
      "log out"}
      </Button>
    </form>
  )
}
