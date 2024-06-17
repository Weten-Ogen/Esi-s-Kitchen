"use client"
import { googleSignIn} from "@/app/actions/actions"
import { Button } from "../ui/button"
import { useFormStatus } from "react-dom"
import { Loader } from "lucide-react";

 
export default  function SignInBtn() {
  const {pending} = useFormStatus();
  return (
    <form action={googleSignIn}
    >
      <Button 
      disabled={pending} 
        type="submit">log in</Button>
    </form>
  )
} 