"use client"

import { providers } from "@/next"
import NavBar from "../general/navbar"
import {SessionProvider} from 'next-auth/react'
export default function AppProvider({children}:providers) {
  return (
    <>
    <SessionProvider>
    <NavBar/>
    <main className="md:w-[80%] md:mx-auto ">
        {children}
    </main>
    </SessionProvider>
    </>
  )
}
