import React from "react";
import avatarIcon from "../../assets/avatar.png";

const Conversation = () => {
  return (
    <>
      <div className="flex gap-2 items-center hover:bg-blue-500 rounded p-2 py-1 cursor-pointer">
        <div className="avatar online">
          <div className="w-12 rounded-full ">
            <img src={avatarIcon} alt="" />
          </div>
        </div>
        <div className="flex flex-col flex-1  ">
          <div className="flex gap-3 justify-between">
            <p className="font-bold text-slate-800">ss</p>
            {/* <span className="text-xl">Just Now</span> */}
          </div>
        </div>
      </div>
      <div className="divider border-b-2 "></div>
    </>
  );
};

export default Conversation;
