"use server"
import { auth, signIn,signOut } from "@/auth"
import prisma from "@/lib/prisma";
import { bookdata } from "@/next";
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

export async function fetchbooking(id:string) {
    const event = await prisma.booking.findUnique({
        where:{
            id: id
        }
    })
    return event

}
export async function deletebooking(id:string){
    await prisma.booking.delete({
        where:{
            id: id
        }
    })
    revalidatePath('/admin');
    revalidatePath('/bookings/lists')
}

export async function googleSignIn(formData:FormData) {
    
     await signIn("google",{redirectTo: "/bookings"});
     revalidatePath('/bookings') 
     
     
}

export async function googleSignOut(current:string) {
    await signOut({redirectTo:"/"})
    revalidatePath(current)
    
        
}

export async function updatebooking(values:any) {
    console.log(values)
    await prisma.booking.update({
        where: {
            id: values.id!,
        },data:{
            name : values.name!,
            email : values.email!,
            venue: values.venue!,
            packages: values.venue!,
            time:values.time!,
            population:values.population!,
            date:values.date!,
        }
    })
    revalidatePath('/bookings/lists')
    revalidatePath('/admin/booking')
}

export async function searchbyemail(formData:FormData){
    
}

    
