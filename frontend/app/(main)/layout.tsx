"use client"

import { Navbar } from "./_components/navbar"

export default function MainLayout({children}:{children:React.ReactNode}){
  return(
    <div className="h-full">
      <Navbar/>
      <main>
        {children}
      </main>
    </div>
  )
}