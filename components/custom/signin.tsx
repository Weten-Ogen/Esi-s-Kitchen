"use client"
import React from 'react';
import { Button } from '../ui/button';
import { signIn } from 'next-auth/react';

export default function SignInBtn() {
  return (
    <Button onClick={async() => await signIn("google")}>log in</Button>
  )
}
