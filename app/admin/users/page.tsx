import DataTable from '@/components/ui/data-table'
import prisma from '@/lib/prisma'
import React from 'react'
import { columns } from './column';

export default async function Users() {
    const users = await prisma.user.findMany({});
    
  return (
    <div className="pt-20">
        {<DataTable columns={columns} data={users}/>}
    </div>
  )
}
