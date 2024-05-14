"use server"


import { signIn, signOut } from "@/auth"

export async function googleSignIn(formData:FormData) {

     return await signIn("google",{redirectTo: "/bookings"});
     
}


export async function googleSignOut() {
    return await signOut();
    
}

