import { bookdata } from "@/next"
import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import prisma from "./prisma"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export async function wait(n:number) {
  return new Promise(resolve => setTimeout(resolve,n))
}

