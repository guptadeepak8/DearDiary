"use client"

import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";
import { useParams,useRouter } from "next/navigation";

interface ItemProps{
  label:String;
  icon: LucideIcon;
  active?:boolean;
  link?:string;
}
 
export const Item = ({label,icon:Icon,active,link}:ItemProps) => {
  const router=useRouter();
  const params=useParams();

  
  const onRedirect=()=>{
    router.push(`/${link}`)
    console.log(params);
    
  }
  return (
    <div 
    onClick={onRedirect} 
    role="button"
    className={cn(
      " py-4 w-full hover:bg-primary/5  flex justify-center text-muted-foreground font-medium",
       active && "bg-primary/5 "
     )}
      >
      <Icon className="shrink-0 text-muted-foreground h-6 w-6 " /> 
    </div>
  )
}

