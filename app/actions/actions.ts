"use server"


import { signIn, signOut } from "@/auth"

export async function googleSignIn(formData:FormData) {

     await signIn("google",{redirectTo: "/bookings"});
     return
     
}


export async function googleSignOut() {
    await signOut();
    return;
    
}

