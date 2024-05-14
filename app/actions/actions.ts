"use server"


import { signIn, signOut } from "@/auth"

export async function googleSignIn() {
     await signIn("google",{redirectTo: "/bookings"});
     
}


export async function googleSignOut() {
    await signOut();
    
}

