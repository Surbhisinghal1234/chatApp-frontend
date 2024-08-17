import React, { useEffect, useRef } from "react";
import Message from "./Message";
import useGetMessages from "../../hooks/useGetMessages";
import useListenMessages from "../../hooks/useListenMessages";

const Messages = () => {
  const { loading, messages } = useGetMessages();

  useListenMessages()

  const lastMessageRef = useRef()

  useEffect(()=>{
  setTimeout(()=>{
    lastMessageRef.current?.scrollIntoView({behavior:"smooth"})
  })
  },[messages])

  return (
    <div className="px-4 overflow-y-scroll h-[560px]">
      {!loading && messages.length === 0 && (
        <p>Start the conversation by sending a message</p>
      )}

      {!loading && messages.length > 0 && messages.map((item) => (
        <div key={item._id}ref={lastMessageRef} >
          <Message message={item} />
        </div>
      ))}
    </div>
  );
};
export default Messages;

