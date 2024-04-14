import { Bookmark, CalendarDays, CircleUserRound, HelpCircle, Home, SquarePen } from "lucide-react";
import { Item } from "./item";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { useParams,useRouter } from "next/navigation";

export const Navigation = () => {
  
 const params=useParams();

 
  return (
    <aside className="  overflow-y-auto flex w-16 flex-col items-center">
      <Avatar className="h-10 w-10 my-3">
        <AvatarImage src="https://github.com/shadcn.png"  />
      </Avatar>
       <Item label="Home" icon={Home} link="home" />
       <Item label="New" icon={SquarePen} link="new"/>
       <Item label="Calender" icon={CalendarDays} link="cal"/>  
       <Item label="BookMark" icon={Bookmark} link="bookmark"/>  

      <div className="mt-auto w-full">
        <Item label="Account" icon={CircleUserRound}/>
        <Item label="Help" icon={HelpCircle}/>
      </div>

    </aside>
  );
};
