"use server"


import { signIn, signOut } from "@/auth"

export async function googleSignIn() {
    return await signIn("google");
}


export async function googleSignOut() {
    return  await signOut();
}

