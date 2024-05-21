import prisma from "@/lib/prisma"
import { revalidatePath } from "next/cache"
import { NextResponse } from "next/server"

export async function POST(req:Request) {
    const body = await req.json()
    console.log(body)
    try {
        const newdata = await prisma.bookings.create({
            data:body,
        })

        console.log(newdata)
        revalidatePath('/admin/bookings')

        return NextResponse.redirect('/booking')
    } catch (error) {
        return NextResponse.json({data:error, status:500})
    }
}