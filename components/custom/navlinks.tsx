"use client"
import { cn } from '@/lib/utils';
import { navlink } from '@/next';
import Link from 'next/link';
import React from 'react';

export default function NavLinks({name,reff,className,children}:navlink) {
 if(children) {
  return <Link href={reff} className={cn('',className)}>{children}</Link>
 }
 return <Link href={reff} className={cn('',className)} >{name}</Link>
}
