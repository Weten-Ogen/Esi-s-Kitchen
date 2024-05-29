"use server"
import { auth, signIn, signOut } from "@/auth"
import prisma from "@/lib/prisma";
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
}

export async function googleSignIn(formData:FormData) {
    
     await signIn("google",{redirectTo: "/bookings"});
     revalidatePath('/bookings') 
     
}

export async function getuserrole(id:string | undefined) {
    const user  = await prisma.user.findUnique({where : {
        id
    }})
    return user?.role

}
export async function googleSignOut() {
    await signOut({redirectTo:'/'});
    revalidatePath('/');
    
}

export async function updatebooking(id:string) {

}
