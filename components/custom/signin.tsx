"use client"
import { googleSignIn} from "@/app/actions"

 
export default  function SignInBtn() {
  return (
    <form
      action={googleSignIn}
    >
      <button type="submit">log in</button>
    </form>
  )
} 