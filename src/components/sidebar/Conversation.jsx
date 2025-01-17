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
      <div className={` bg-[#59082e] rounded-2xl  flex pl-4 py-2 gap-2 items-center hover:bg-boxLeft cursor-pointer ${isSelected? "bg-boxLeft": ""}`}  
        onClick={()=> setSelectedConversation(conversation)}
      >
        <div className={`avatar ${isOnline ? "online": ""}`}>

          <div className="w-12 rounded-full ">
            <img src={conversation.profilePic} alt="" />
          </div>
        </div>
        <div className="flex flex-col flex-1  ">
          <div className="flex gap-3 justify-between">
            <p className={`font-bold ${isSelected? "text-white" : "text-white"}`}>{conversation.username}</p>
            {/* <span className="text-xl">Just Now</span> */}
          </div>
        </div>
      </div>
     {/* {!lastIndex && <div className="border-2 border-b border-[#f6d4f579]"></div>}  */}
    </>
  );
};

export default Conversation;
