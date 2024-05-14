"use client"
import React from 'react'
import { Button } from '../ui/button'
import {  signOut } from 'next-auth/react';

export default function SignOutBtn() {
  async function signoutact (){
    'use server'
      await signOut()
  }
  return (
    <form action={signoutact}> 

      <Button

      className='tracking-wide text-lg cap' 
      variant={"outline"} 
      type="submit">log out</Button>
    </form>
  )
}
