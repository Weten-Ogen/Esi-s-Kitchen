import { bookdata } from "@/next"
import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import prisma from "./prisma"
import toast from 'react-hot-toast'



export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export async function wait(n:number) {
  return new Promise(resolve => setTimeout(resolve,n))
}

export function notify (note:string) {
  return toast(note)
}