"use server"
import { auth, signIn, signOut } from "@/app/auth"
import prisma from "@/lib/prisma";
import { User } from "lucide-react";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function appointment(input:any){
    const  session = await auth();
    const userId = session?.user.id
    const bookings = await prisma.booking.create({
        data: {
            name:input.name!,
            tel:input.name!,
            contact:input.contact!,
            date:input.date!,
            occassion:input.occassion!,
            packages:input.packages!,
            population:input.population!,
            time:input.time!,
            venue:input.venue!,
            email:input.email!,
            userId:userId!,
            
        }
    })
    revalidatePath('/admin')
    revalidatePath('/bookings/lists')
    redirect('/bookings/lists')
}

export async function deletebooking(id:string){
    await prisma.booking.delete({
        where:{
            id: id
        }
    })
    revalidatePath('/admin');
    revalidatePath('/bookings/lists')
    redirect('/bookings/lists')
}

export async function googleSignIn(formData:FormData) {

     await signIn("google",{redirectTo: "/bookings"});
     revalidatePath('/')
     
}


export async function googleSignOut() {
    await signOut({redirectTo:"/"});
    revalidatePath('/')
    
    
}

