"use client"
import React from 'react'
import { Button } from '../ui/button'
import { googleSignOut } from '@/app/actions/actions'
import { useFormStatus } from 'react-dom'


export default function SignOutBtn() {
  const {pending} = useFormStatus();
  return (
    <form action={googleSignOut}> 
      <Button
      className='tracking-wide text-lg cap' 
      variant={"outline"} 
      type="submit" aria-disabled={pending}>log out</Button>
    </form>
  )
}
