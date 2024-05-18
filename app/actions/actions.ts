"use server"


import { signIn, signOut } from "@/auth"
import { revalidatePath } from "next/cache";

export async function googleSignIn(formData:FormData) {

     await signIn("google",{redirectTo: "/bookings"});
     revalidatePath('/')
     
}


export async function googleSignOut() {
    await signOut({redirectTo:"/"});
    return;
    
}


// get functions 
export  async function  getUsers(formData:FormData){

}

export  async function  getBookings(formData:FormData){

}
export  async function  getPackages(formData:FormData){

}
export  async function  getServices(formData:FormData){

}


// single queries on get functions
export async function getUserById(formData:FormData) {

}

export async function getServiceById(formData:FormData) {
    
}

export async function getBookingById(formData:FormData) {

}

export async function  getPackageById(formData:FormData) {

}

interface data {
    name : string,
    tel : number,
    contact:number,
    date: Date,
    time: string,
    ocassion:string,
    venue:string,
    package:string,
    population:number
    

}
// submit booking
