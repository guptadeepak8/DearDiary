"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { SendHorizonal } from "lucide-react"
import { useRef, useState } from "react"


export const ChatInput=()=>{
  const inputRef=useRef<HTMLInputElement>(null)
  const [input,setInput]=useState("")

  const handleClick=()=>{

    disableInput()
  }

  const handleInput=(e:React.ChangeEvent<HTMLInputElement>)=>{
    setInput(e.target.value)
  }

  const disableInput=()=>{
    setInput("")
  }
  const onKeyDown=(e:React.KeyboardEvent<HTMLInputElement>)=>{
    if(e.key==="Enter"){
      disableInput();
    }
  }
return (
  <div className="flex items-center border-2  pr-x-2 ">
   <Input 
    className=" border-0 focus-visible:ring-transparent"
    onChange={handleInput}
    onKeyDown={onKeyDown}
    placeholder="Type here"
    type="text"
    value={input}
   />
   <Button variant="default" className="bg-green-500 rounded-xl" size="sm" onClick={handleClick} >
    <SendHorizonal className="h-6 w-6 "/>
   </Button>
  </div>
)  

}