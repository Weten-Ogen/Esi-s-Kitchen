"use server"


import { signIn, signOut } from "@/auth"

export async function googleSignIn() {
    return signIn("google");
}


export async function googleSignOut() {
    return signOut();
}

