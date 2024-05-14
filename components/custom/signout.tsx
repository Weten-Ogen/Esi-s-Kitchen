"use client"
import { googleSignOut } from '@/app/actions'
import React from 'react'
import { Button } from '../ui/button'
import { signOut } from 'next-auth/react'

export default function SignOutBtn() {
  return (
        <Button
        onClick={async() => signOut()}
        className='tracking-wide text-lg cap' 
        variant={"outline"} 
        type="submit">log out</Button>
  )
}
