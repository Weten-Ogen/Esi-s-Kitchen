
import { signIn } from "@/auth"
 
export default function SignInBtn() {
  async function signInaction () {
    'use server'
    await signIn("google")
  }
  return (
    <form
      action={signInaction}
    >
      <button type="submit">log in</button>
    </form>
  )
} 