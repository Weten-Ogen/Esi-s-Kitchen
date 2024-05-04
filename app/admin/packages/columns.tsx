"use client"
import React from 'react'
import { ColumnDef } from '@tanstack/react-table'
import { Checkbox } from '@/components/ui/checkbox'

export interface packProp {
    id : string,
    type: string,
    price:number,
    items: string[],
    imageurl: string 
}


export const packagesColumns : ColumnDef<packProp>[] = [  
    {
    header: " ",
    cell:({row}) => { 
        console.log(row)
            return <Checkbox />
        }
    },
    { 
        accessorKey:"id",
        header: "ID",
    },
    { 
        accessorKey:"type",
        header: "Type",
    },
    { 
        accessorKey:"price",
        header: "Price",
    },
    { 
        accessorKey:"item",
        header: "List of Dishes",
        cell: ({row}) => {
            const items:string[] = row.getValue('item');
            console.log(items)
            return <div>hello world</div>
        }
        
    },
    { 
        accessorKey:"imageurl",
        header: "Image",
    },
]