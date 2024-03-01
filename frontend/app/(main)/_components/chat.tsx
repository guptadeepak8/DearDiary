"use client"

import { useEffect, useState } from "react"
import { ChatInput } from "./input"
import { Message } from "./message"


export const Chat=()=>{
const [chats,setChat]=useState<String[]>([])
const [inputValue,setInputValue]=useState("")

function handleClick(input: string){
  setChat([...chats,input])
}

  return(
    <div className="flex flex-col basis-1/2">
      <div className="bg-slate-200 h-[80vh]">
        {
          chats.map((data,index)=>{
            return(
               <Message key={index} inputValue={data}/>
            )
          })
        }
      </div>
      <div>
        <ChatInput setInputValue={setInputValue} inputValue={inputValue}  handleClick={handleClick}/>
      </div>
    </div>
  )
}