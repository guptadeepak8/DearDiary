"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { SendHorizonal } from "lucide-react"
import { useRef, useState } from "react"


export const ChatInput=({setInputValue,handleClick,inputValue}:any)=>{
  const inputRef=useRef<HTMLInputElement>(null)
  const handleInput=()=>{
    setInputValue(inputValue)
    handleClick(inputValue)
    disableInput()
  }

  const disableInput=()=>{
    setInputValue("")
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
    onChange={(e)=>  setInputValue(e.target.value)}
    onKeyDown={onKeyDown}
    placeholder="Type here"
    type="text"
    value={inputValue}
   />
   <Button variant="default" className="bg-green-500 rounded-xl" size="sm" onClick={handleInput} >
    <SendHorizonal className="h-6 w-6 "/>
   </Button>
  </div>
)  

}