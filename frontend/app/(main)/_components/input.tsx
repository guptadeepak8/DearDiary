"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { SendHorizonal } from "lucide-react"
import { useRef, useState } from "react"


export const ChatInput=({setUser,handleClick,user}:any)=>{
  const inputRef=useRef<HTMLInputElement>(null)
  const handleInput=()=>{
    setUser(user)
    handleClick(user)
    disableInput()
  }

  const disableInput=()=>{
    setUser("")
  }
  const onKeyDown=(e:React.KeyboardEvent<HTMLInputElement>)=>{
    if(e.key==="Enter"){
      handleInput();
      disableInput();
    }
  }
return (
  <div className="flex items-center border-2  pr-x-2 ">
   <Input 
    className=" border-0 focus-visible:ring-transparent"
    onChange={(e)=>  setUser(e.target.value)}
    onKeyDown={onKeyDown}
    placeholder="Type here"
    type="text"
    value={user}
   />
   <Button variant="default" className="bg-green-500 rounded-xl" size="sm" onClick={handleInput} >
    <SendHorizonal className="h-6 w-6 "/>
   </Button>
  </div>
)  

}