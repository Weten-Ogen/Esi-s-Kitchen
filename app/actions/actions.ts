"use serer"
import { signIn, signOut } from "@/auth"
import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function appointment(input:any){
    await prisma.booking.create(
        {
            data:input,
        }
    )
    revalidatePath("/admin/bookings")
    redirect("/admin/bookings")
    return 

}
export async function googleSignIn(formData:FormData) {

     await signIn("google",{redirectTo: "/bookings"});
     revalidatePath('/')
     
}


export async function googleSignOut() {
    await signOut({redirectTo:"/"});
    revalidatePath('/')
    
    
}

