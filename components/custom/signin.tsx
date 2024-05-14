"use client"
import React from 'react';
import { Button } from '../ui/button';
import { signIn } from 'next-auth/react';

export default function SignInBtn() {
  return (
    <form action={async() => {
      'use server'
      await signIn('google',{redirectedTo:'/bookings'})
    }}>
      <Button
      variant={'outline'} 
      type='submit'>log in</Button>
    </form>
  )
}
