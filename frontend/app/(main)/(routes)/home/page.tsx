"use client"

import { Plus } from "lucide-react"
import { Editor } from "../../_components/editor"
import { Card } from "../../_components/card"

export default function MainPage() {
  return (
    <div className="flex flex-row w-full h-full">
       <div className="bg-neutral-100 w-1/3">
          <div 
          role="button"
          className="text-center flex mx-6 my-2 px-3 py-2 rounded-lg hover:bg-primary/5 text-muted-foreground font-medium">
            <span className="truncate">New Diary</span>
            <Plus className="h-6 w-6 ml-auto" />
          </div>
          <div className="w-full ">
          <Card />
          <Card />
          <Card />
          </div>
       </div>

       <Editor />
    </div>
  )
}