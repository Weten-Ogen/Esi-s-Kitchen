"use client"

import { providers } from "@/next"
import NavBar from "../general/navbar"

export default function AppProvider({children}:providers) {
  return (
    <>
    <NavBar/>
    <main className="pt-16 ">
        {children}
    </main>
    </>
  )
}
