"use client"

import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { useState,useEffect } from "react"


export const GeneratorTab=()=>{
  const [text,setText]=useState("heeeelkdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddheeeelkdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddheeeelkdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddheeeelkddddddddddddddddddddddddddddddddddddddddddddddddddddd")

  const [displayText, setDisplayText] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);

  useEffect(() => {
    if (isGenerating) {
      let index = 0;
      const intervalId = setInterval(() => {
        if (index < text.length) {
          setDisplayText((prevText) => prevText + text.charAt(index));
          index++;
        } else {
          clearInterval(intervalId);
          setIsGenerating(false);
        }
      }, 10); // Adjust the delay (in milliseconds) for the typewriter effect
      return () => clearInterval(intervalId);
    }
  }, [isGenerating, text]);

  const handleGenerate = () => {
    setIsGenerating(true);
  };

 return(
  <div className="flex flex-col w-3/5 border-l-2 ">
   <div className="h-full">
    <Textarea 
    readOnly 
    className="text-md resize-none bg-transparent font-bold break-words outline-none h-full focus-visible:ring-transparent overflow-y-auto"
    value={displayText}
    />
   </div>
   <div>
    <Button variant="ghost"onClick={handleGenerate} disabled={isGenerating}>Genrate</Button>
   </div>
  </div>
 )  
}