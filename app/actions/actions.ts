"use server"


import { signIn, signOut } from "@/auth"

export async function googleSignIn() {
     await signIn("google");
     return
}


export async function googleSignOut() {
    await signOut();
    return 
}

