import { googleSignOut } from '@/app/actions'
import React from 'react'
import { Button } from '../ui/button'

export default function SignOutBtn() {
  return (
    <form action={googleSignOut}>
        <Button
        className='tracking-wide text-lg cap' 
        variant={"outline"} 
        type="submit">log out</Button>
    </form>
  )
}
