"use client"

import { CircleUserRound } from "lucide-react"

export const Navbar=()=>{
  return(
    <nav className="bg-background py-2 px-3 w-full flex items-center">
      <div className="flex items-center justify-between w-full">
        <h2>DearDiary</h2>
        <div>
          <CircleUserRound 
          role="button"
          className="h-7 w-7 text-muted-foreground"/>
        </div>
      </div>
    </nav>
  )
}