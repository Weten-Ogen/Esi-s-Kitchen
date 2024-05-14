"use client"
import React from 'react'
import { Button } from '../ui/button'
import {  signOut } from 'next-auth/react';

export default function SignOutBtn() {
  return (
    <form action={async() => {
      'use server'
      await signOut()
    }}> 

      <Button

      className='tracking-wide text-lg cap' 
      variant={"outline"} 
      type="submit">log out</Button>
    </form>
  )
}
