'use client'
import React from 'react'
import {
    ColumnDef,
    flexRender,
    getCoreRowModel,
    getPaginationRowModel,
    useReactTable,
} from '@tanstack/react-table';
import { Table,TableBody,TableCell,TableHead,TableHeader,TableRow } from '@/components/ui/table';

interface DataTableProps<TData,TValue> {
    columns: ColumnDef<TData,TValue>[]
    data:TData[]
}

export default function DataTable<TData,TValue>({columns,data}:DataTableProps<TData,TValue>) {
    const table = useReactTable({
        data,
        columns,
        getCoreRowModel:getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
    })
  return (
    <div>
        <Table>
            <TableHeader>
                {
                    table.getHeaderGroups().map((headerGroup) => (<TableRow    key={headerGroup.id}>
                        {headerGroup.headers.map((header) => {
                            return (
                                <TableHead key={header.id}>
                                    {header.isPlaceholder ? null : flexRender(header.column.columnDef.header,header.getContext())}
                                </TableHead>
                            )
                        })}      
                    </TableRow>))
                }
            </TableHeader>
            <TableBody>
                {table.getRowModel().rows?.length ? (
                    table.getRowModel().rows.map((row)  =>  (
                        <TableRow 
                        key={row.id}
                        data-state={row.getIsSelected() && 'selected'}
                        >
                            {
                                row.getVisibleCells().map((cell) => (<TableCell key={cell.id}>
                                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                </TableCell>))
                            }
                        </TableRow>
                    ))
                ):(
                    <TableCell colSpan={columns.length} className="h-24  text-center">
                        no results
                    </TableCell>
                )}
            </TableBody>
        </Table>
    </div>
  )
}
