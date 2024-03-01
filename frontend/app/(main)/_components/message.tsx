"use client"

import { cn } from "@/lib/utils"
import { useEffect, useState } from "react"

export const Message=({inputValue}:any)=>{

  const [bot,setBot]=useState("")

  const fetchData=async()=>{
    try {
       const res=await fetch('')
       if(res.ok){
         const {message}=await res.json();
         setBot(message)
       }
    } catch (error) {
     
    }  
   }
   
   useEffect(()=>{
    fetchData()
   },[inputValue])
  
  return(
   <div className="flex flex-col ">
    <div className="ml-auto bg-slate-500 py-2 px-2">{inputValue}</div>
    {bot && <div className="mr-auto bg-stone-400 py-2 px-2">{bot}</div>}
   </div>
  )
}