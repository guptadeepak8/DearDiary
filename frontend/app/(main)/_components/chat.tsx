"use client"

import { useEffect, useState } from "react"
import { ChatInput } from "./input"
import { Message } from "./message"

const data=[
  { 
    user:"hello",
    bot:"hello who may i help you"
  },
  {
    user:"hello",
    bot:"hello who may i help you"
  },
  {
    user:"hello",
    bot:"hello who may i help you"
  },
]
export const Chat=()=>{
const [chats,setChat]=useState(data)
const [inputValue,setInputValue]=useState("")

  return(
    <div className="flex flex-col basis-1/2">
      <div className="bg-slate-200 h-[80vh]">
        {
          chats.map((data,index)=>{
            return(
               <Message key={index} bot={data.bot} user={data.user}/>
            )
          })
        }
      </div>
      <div>
        <ChatInput/>
      </div>
    </div>
  )
}