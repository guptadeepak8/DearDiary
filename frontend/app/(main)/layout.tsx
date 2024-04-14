"use client"

import { Navbar } from "./_components/navbar"
import { Navigation } from "./_components/navigation"

export default function MainLayout({children}:{children:React.ReactNode}){
  return(
    <div className="flex h-full">
      <Navigation/>
      <main className="flex-1 h-full overflow-y-auto">
        {children}
      </main>
    </div>
  )
}