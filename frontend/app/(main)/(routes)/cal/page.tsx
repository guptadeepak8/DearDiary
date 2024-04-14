"use client"

import { Calendar } from "@/components/ui/calendar"
import { useState } from "react"
import { Editor } from "../../_components/editor"

export default function MainPage() {

  const [date, setDate] = useState<Date | undefined>(new Date())
  return (
    <div className="flex h-full">
    <div className="bg-slate-300 w-1/4 text-center px-5 py-10">
    <Calendar
      mode="single"
      selected={date}
      onSelect={setDate}
      className="rounded-md border bg-white"
    />
       
    </div>

    <Editor />
 </div>
  )
}