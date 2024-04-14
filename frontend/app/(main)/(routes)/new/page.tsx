"use client"

import { Chat } from "@/app/(main)/_components/chat";
import { GeneratorTab } from "../../_components/genrator";

export default function MainPage() {
  return (
    <div className="flex flex-row h-full">
      <Chat />
      <GeneratorTab/>
    </div>
  )
}