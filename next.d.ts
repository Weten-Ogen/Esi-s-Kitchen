import React from "react"
import { DropdownMenu } from "./components/ui/dropdown-menu"
import { StaticImageData } from "next/image"
import { StaticImport } from "next/dist/shared/lib/get-img-props"

interface providers {
    children: React.ReactNode
}

interface navlink {
    name?: string,
    reff: string,
    children?:React.ReactElement,
    className?: string,
}

interface dropdown extends React.ComponentProps<typeof DropdownMenu> {
    className?:string,
    trig?: string,
}

interface btn {
    vatype?:'default'| 'outline'|'ghost'|'secondary'|null|undefined|'link'|'destructive',
    className?:string,
    name?:string,
    children?:React.ReactElement,

}

interface servicecard {
    name:string,
    comment:string,
    className?:string,
    
}

interface packcard {
    name : string,
    price: number,
    items: string[],
    imageurl:string | StaticImport 
}

interface packages {
    type: string,
    price:number,
    items: string[],
    imageurl:string | StaticImport
}

interface singlebook {
    params:{id: string}
}

interface testicard {
    imageurl: string | StaticImport,
    comment: string,
    className:string,    
}

