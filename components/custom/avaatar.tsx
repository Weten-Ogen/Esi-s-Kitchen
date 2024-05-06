"use client"
import React from 'react'
import { Avatar,AvatarImage,AvatarFallback } from '../ui/avatar'
import { avaatar } from '@/next'
import { cn } from '@/lib/utils'

export default function AvaTar({imageurl,name,className}:avaatar) {
  return (
    <Avatar className={cn('bg-orange-500',className)}>
        {imageurl ? <AvatarImage src={imageurl} alt="avatar"/>: <AvatarFallback>{name?.slice(0,1)}</AvatarFallback>}
    </Avatar>
  )
}
