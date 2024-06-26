"use client"

import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import {  userdata } from "@/next"
import { ColumnDef } from "@tanstack/react-table"
import { ArrowUpDown, MoreHorizontal } from "lucide-react"


export const columns: ColumnDef<userdata>[] = [
    {
      id: "select",
      header: ({ table }) => (
        <Checkbox
          checked={
            table.getIsAllPageRowsSelected() ||
            (table.getIsSomePageRowsSelected() && "indeterminate")
          }
          onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
          aria-label="Select all"
        />
      ),
      cell: ({ row }) => (
        <Checkbox
          checked={row.getIsSelected()}
          onCheckedChange={(value) => row.toggleSelected(!!value)}
          aria-label="Select row"
        />
      ),
      enableSorting: false,
      enableHiding: false,
    },
    {
        accessorKey: "id",
        header: () => <div>Id</div>,
        cell: ({ row }) => {
          return <div>{row.getValue('id')}</div>
        }, 
      },
    {
      accessorKey: "email",
      header: ({ column }) => {
        return (
            <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            Email
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        )
    },
    cell: ({ row }) => <div className="lowercase">{row.getValue("email")}</div>,
},
    {
      accessorKey: "name",
      header: () => <div className="text-right">Name</div>,
      cell: ({ row }) => {
        return <div className="text-right font-medium">{row.getValue('name')}</div>
      },
    },
    {
        accessorKey: "role",
        header: () => <div>Role</div>,
        cell: ({ row }) => {
            return <div>{row.getValue('role')}</div>
        },
      },
      
      {
        accessorKey: "createdAt",
        header: () => <div>createdAt</div>,
        cell: ({ row }) => {
            const date = new Date(row.getValue('createdAt'))
            return <div>{date.toUTCString()}</div>
        },
    },
    
    {
        accessorKey: "updatedAt",
        header: () => <div>UpdatedAt</div>,
        cell: ({ row }) => {
            const update = new Date(row.getValue('updatedAt'))
            return <div>{update.toUTCString()}</div>
        },
    },
    {
      accessorKey: "image",
      header: () => <div>Image</div>,
      cell: ({ row }) => {
        return <div className=" ">{row.getValue('image')}</div>
      },
    },
  ]
  