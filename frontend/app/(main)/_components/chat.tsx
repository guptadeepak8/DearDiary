// Chat component
"use client"

import { useEffect, useState } from "react";
import { ChatInput } from "./input";
import { Message } from "./message";

export const Chat = () => {
  const [chats, setChats] = useState<{ user: string; bot: string }[]>([]);
  const [inputMessage, setInputMessage] = useState("");

  const fetchData = async (Usermessage: string) => {
    // try {
    //   const res = await fetch('http://127.0.0.1:8000/get_question/', {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify({ Usermessage }),
    //   });

    //   if (res.ok) {
    //     const { message } = await res.json();
    //     setChats((prevChats) => [
    //       ...prevChats,
    //       { user:inputMessage , bot: message },
    //     ]);
    //   }
    // } catch (error) {
    //   console.error(error);
    // }

    setChats([
      {user:"hii",bot:'heloo' },
      {user:"how ",bot:'but how ' },
      {user:"thats why",bot:'i ubdrstad yous' },
      {user:"hii",bot:'heloo' },
      {user:"how ",bot:'but how ' },
      {user:"thats why",bot:'i ubdrstad yous' },
      {user:"hii",bot:'heloo' },
      {user:"how ",bot:'but how ' },
      {user:"thats why",bot:'i ubdrstad yous' },
    ])
  };

  const handleClick = async (message: string) => {
      setInputMessage("");
     fetchData(inputMessage);
  };

  return (
    <div className="flex flex-col w-2/5">
      <div className="bg-slate-200 h-full overflow-y-auto ">
        {chats.map((data, index) => (
          <Message key={index} inputValue={data.user} bot={data.bot} />
        ))}
      </div>
      <div>
        <ChatInput
          setUser={setInputMessage}
          user={inputMessage}
          handleClick={handleClick}
        />
      </div>
    </div>
  );
};
