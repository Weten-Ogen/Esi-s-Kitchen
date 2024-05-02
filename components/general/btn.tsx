"use client"
import React from 'react'
import { Button } from '../ui/button'
import { btn } from '@/next'
import { cn } from '@/lib/utils'

export default function Btn({name,children,className,vatype}:btn) {
  if(!children) return <Button variant={vatype} className={cn('tracking-wide  hover:-translate-y-0.5 duation-500  ',className)}>{name}</Button>
  return <Button>
    <>
    {children}
    </>
    {name}
  </Button>
}
