import React from "react";
import avatarIcon from "../../assets/avatar.png";
import useConversation from "../../zustand/useConversation";
import { useSocketContext } from "../../context/SocketContext";

const Conversation = ({conversation, lastIndex}) => {

  const {selectedConversation, setSelectedConversation} =useConversation() 

  const isSelected = selectedConversation?._id === conversation._id


  const {onlineUsers} = useSocketContext()

  const isOnline = onlineUsers.includes(conversation._id)
  return (
    <>
      <div className={`flex pl-4 py-2 gap-2 items-center hover:bg-gray-500 cursor-pointer ${isSelected? "bg-white": ""}`}  
        onClick={()=> setSelectedConversation(conversation)}
      >
        <div className={`avatar ${isOnline ? "online": ""}`}>

          <div className="w-12 rounded-full ">
            <img src={conversation.profilePic} alt="" />
          </div>
        </div>
        <div className="flex flex-col flex-1  ">
          <div className="flex gap-3 justify-between">
            <p className={`font-bold ${isSelected? "text-black" : "text-white"}`}>{conversation.username}</p>
            {/* <span className="text-xl">Just Now</span> */}
          </div>
        </div>
      </div>
     {!lastIndex && <div className="border-2 border-b border-slate-600 "></div>} 
    </>
  );
};

export default Conversation;
