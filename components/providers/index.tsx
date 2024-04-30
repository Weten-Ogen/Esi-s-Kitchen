"use client"

import { providers } from "@/next"
import NavBar from "../general/navbar"

export default function AppProvider({children}:providers) {
  return (
    <>
    <NavBar/>
    <main className="md:w-[80%] md:mx-auto ">
        {children}
    </main>
    </>
  )
}
