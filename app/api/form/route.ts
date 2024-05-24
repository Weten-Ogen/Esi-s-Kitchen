import prisma from "@/lib/prisma";
import { NextResponse } from "next/server"

export async function POST(req:Request) {
    const body = await req.json();
    try {
        const newdata = await prisma.bookings.create({
            data:body,
        })
        return NextResponse.json({data:newdata,status:200})
    } catch (error) {
        return NextResponse.json({data:error, status:500})
    }
}