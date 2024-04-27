import React from "react"
import { DropdownMenu } from "./components/ui/dropdown-menu"

interface providers {
    children: React.ReactNode
}

interface navlink {
    name?: string,
    reff?: string,
    children?:React.ReactElement,
    className?: string,
}

interface dropdown extends React.ComponentProps<typeof DropdownMenu> {
    className?:string,
    trig?: string,
}

interface btn {
    vatype?:string,
    className?:string,
    name:string,
    children?:React.ReactElement,

}

interface servicecard {
    name:string,
    comment:string,
    className?:string,

}