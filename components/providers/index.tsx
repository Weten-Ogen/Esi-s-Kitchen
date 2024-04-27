"use client"

import { providers } from "@/next"
import NavBar from "../general/navbar"

export default function AppProvider({children}:providers) {
  return (
    <>
    <NavBar/>
    <main className="mt-16 px-8 mx-auto w-[95%]">
        {children}
    </main>
    </>
  )
}
