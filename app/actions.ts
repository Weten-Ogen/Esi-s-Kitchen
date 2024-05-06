'use server'


import { signIn, signOut } from "@/auth"

export async function googleSignIn() {
    return signIn("google", {redirectTo:"/bookings"});
}


export async function googleSignOut() {
    return signOut();
}

