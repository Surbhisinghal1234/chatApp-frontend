import React, { useState } from "react";
import { BsSend } from "react-icons/bs";
import useSendMessage from "../../hooks/useSendMessage";

const MessageInput = () => {
  const [message, setMessage] = useState("");

  const { loading, sendMessage } = useSendMessage();

const handleSubmit = async (e) => {
  e.preventDefault();

  if (!message) {
    return;
  }

  await sendMessage(message);
  setMessage("");
};

  return (
    <div>
      <form onSubmit={handleSubmit} action="" className="px-4 my-3 sticky bottom-0">
        <div className="w-full relative">
          <input
            className="border bottom-0 text-xm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 text-white"
            type="text"
            placeholder="Enter Your Text"
            value={message}
            onChange={(e)=> setMessage(e.target.value)}
          />

          <button
            type="submit "
            className=" absolute flex items-center pe-3 inset-y-0 end-0"
          >
            {
              loading ? (
                <div className="loading loading-spinner"></div>
              ) :(
                <BsSend />
              )
            }
         
          </button>
        </div>
      </form>
    </div>
  );
};

export default MessageInput;
