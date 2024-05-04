import DataTable from '@/components/ui/data-table'
import React from 'react'
import { packagesColumns } from './columns'
import {packages} from '@/data/data'

export default function Packages() {
  return (
    <section className="pt-20 md:pt-10">
        <h2>esi's kitchen packages </h2>
        <div className='p-2'>
            <DataTable columns={packagesColumns} data={packages}  />
        </div>
    </section>
  )
}
