"use client"
import { signinbtn } from '@/next'
import React from 'react'
import { signIn } from '@/lib/auth'
import { Button } from '../ui/button'

export default function SignInBtn({name}:signinbtn) {
  return (
    <Button onClick={() => signIn('google')}>{name}</Button>
  )
}
