"use client"
import React from 'react'
import { Button } from '../ui/button'
import { btn } from '@/next'
import { cn } from '@/lib/utils'

export default function Btn({name,children,className,vatype}:btn) {
  if(!children) return <Button variant={vatype} className={cn('tracking-wide text-sm ring-1 ring-orange-500 hover:-translate-y-0.5 duration-500 ease-out hover:text-orange-500  ',className)}>{name}</Button>
  return <Button>
    <>
    {children}
    </>
    {name}
  </Button>
}
