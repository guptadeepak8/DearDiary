"use client"

import { cn } from "@/lib/utils"
import { useState } from "react"

export const Message=({bot,user}:any)=>{
  
  return(
   <div className="flex flex-col ">
    {user && <div className="ml-auto bg-slate-500 py-2 px-2">{user}</div>}
    {bot && <div className="mr-auto bg-stone-400 py-2 px-2">{bot}</div>}
   </div>
  )
}