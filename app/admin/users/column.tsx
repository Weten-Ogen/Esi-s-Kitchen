"use client"
import { bookdata } from '@/next'
import { ColumnDef } from '@tanstack/react-table'
import React from 'react'

type user = {
    id: string,
    name: string | null,
    email: string ,
    image: string | null,
    role : string | null,
    emailVerified: Date | null,
    createdAt: Date,
    updateAt: Date, 

}
export const columns: ColumnDef<user>[] = [
    {
        accessorKey: 'id',
        header: "id"
    },
    {
        accessorKey: 'name',
        header:'name',
    },
    {
        accessorKey: 'email',
        header: 'email'
    },
    {
        accessorKey: 'image',
        header: 'image'
    },
    {
        accessorKey: 'role',
        header: 'role'
    }
]
