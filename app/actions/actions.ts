"use server"


import { signIn, signOut } from "@/auth"

export async function googleSignIn() {
     await signIn("google",{redirectTo: "/bookings"});
     return 0
}


export async function googleSignOut() {
    await signOut();
    return 1
}

