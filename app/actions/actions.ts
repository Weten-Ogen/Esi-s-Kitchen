"use server"


import { signIn, signOut } from "@/auth"
import { value } from "@/components/custom/packform";
import prisma from "@/lib/prisma";
import { bookdata } from "@/next";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";


export async function appointment (newdata:value){
    const midata = newdata
    await prisma.booking.create(
        {
            data:midata
        }
    )
    revalidatePath("/admin/bookings")
    redirect("/admin/bookings")

}
export async function googleSignIn(formData:FormData) {

     await signIn("google",{redirectTo: "/bookings"});
     revalidatePath('/')
     
}


export async function googleSignOut() {
    await signOut({redirectTo:"/"});
    revalidatePath('/')
    
    
}

