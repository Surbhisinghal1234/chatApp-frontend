import React from "react";
import { useAuthContext } from "../../context/AuthContext";
import useConversation from "../../zustand/useConversation";
import { formatTime } from "../../utils/formatTime";

const Message = ({ message }) => {
  const { authUser } = useAuthContext();
  const { selectedConversation } = useConversation();

  const messageFromMe = message.senderId === authUser._id;
  const chatClassName = messageFromMe ? "chat-end" : "chat-start";
  const profilePic = messageFromMe ? authUser.profilePic : selectedConversation.profilePic;
  const msgBgColor = messageFromMe ? "bg-[#075e54]" : "bg-[chatLeft] text-black"; 


  const formattedTime = formatTime(message.createdAt)
  return (
    <div className={`chat ${chatClassName}`}>
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
          <img src={profilePic} alt="user Avatar" />
        </div>
      </div>

      <div className={`chat-bubble font-medium ${msgBgColor}`}>
        {message.message}
      </div>

      <div className="chat-footer opacity-50 text-slate-950 items-center flex gap-1">
        {formattedTime}

      </div>
    </div>
  );
};

export default Message;
