import React from "react";
import avatarIcon from "../../assets/avatar.png";
import useConversation from "../../zustand/useConversation";

const Conversation = ({conversation, lastIndex}) => {

  const {selectedConversation, setSelectedConversation} =useConversation() 

  const isSelected = selectedConversation?._id === conversation._id

  return (
    <>
      <div className={`flex gap-2 items-center hover:bg-blue-500 rounded p-2 py-1 cursor-pointer ${isSelected? "bg-sky-500": ""}`}  
        onClick={()=> setSelectedConversation(conversation)}
      >
        <div className="avatar online">
          <div className="w-12 rounded-full ">
            <img src={conversation.profilePic} alt="" />
          </div>
        </div>
        <div className="flex flex-col flex-1  ">
          <div className="flex gap-3 justify-between">
            <p className="font-bold text-slate-800">{conversation.username}</p>
            {/* <span className="text-xl">Just Now</span> */}
          </div>
        </div>
      </div>
     {!lastIndex && <div className="divider "></div>} 
    </>
  );
};

export default Conversation;
