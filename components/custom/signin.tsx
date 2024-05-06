
import React from 'react';
import { Button } from '../ui/button';
import { googleSignIn } from '@/app/actions';

export default function SignInBtn() {
  return (
    <form 
    action={googleSignIn}>
      <Button type="submit">log in</Button>
    </form>
  )
}
