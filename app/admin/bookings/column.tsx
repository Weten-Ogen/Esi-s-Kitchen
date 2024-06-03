"use client"

import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { bookdata } from "@/next"
import { ColumnDef } from "@tanstack/react-table"
import { ArrowUpDown, MoreHorizontal } from "lucide-react"


export const columns: ColumnDef<bookdata>[] = [
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
      accessorKey: "status",
      header: "Status",
      cell: ({ row }) => (
        <div className="capitalize">{row.getValue("status")}</div>
      ),
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
      accessorKey: "occassion",
      header: () => <div>Occassion</div>,
      cell: ({ row }) => {
        return <div>{row.getValue('occassion')}</div>
      },
    },
    {
        accessorKey: "date",
        header: () => <div>Date</div>,
        cell: ({ row }) => {
          return <div>{row.getValue('date')}</div>
        },
      },
      {
        accessorKey: "packages",
        header: () => <div>packages</div>,
        cell: ({ row }) => {
          return <div>{row.getValue('packages')}</div>
        },
      },
      {
        accessorKey: "contact",
        header: () => <div>Contact</div>,
        cell: ({ row }) => {
          return <div>{row.getValue('contact')}</div>
        },
      },
      {
        accessorKey: "population",
        header: () => <div>Number per Head</div>,
        cell: ({ row }) => {
          return <div>{row.getValue('population')}</div>
        },
      },
      {
        accessorKey: "time",
        header: () => <div>Time</div>,
        cell: ({ row }) => {
          return <div>{row.getValue('time')}</div>
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
        accessorKey: "venue",
        header: () => <div>Venue</div>,
        cell: ({ row }) => {
          return <div>{row.getValue('venue')}</div>
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
  ]
  