"use client"

import { providers } from "@/next"
import NavBar from "../general/navbar"

export default function AppProvider({children}:providers) {
  return (
    <>
    <NavBar/>
    <main className="mt-16 md:px-8 md:mx-auto md:w-[95%]">
        {children}
    </main>
    </>
  )
}
