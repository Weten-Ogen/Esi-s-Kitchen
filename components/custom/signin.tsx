"use client"
import { googleSignIn} from "@/app/actions/actions"
import { Button } from "../ui/button"

 
export default  function SignInBtn() {
  return (
    <form
      action={googleSignIn}
    >
      <Button type="submit">log in</Button>
    </form>
  )
} 