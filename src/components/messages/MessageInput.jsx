// import React, { useState,useEffect,useRef } from "react";
// import { BsSend , BsEmojiSmile } from "react-icons/bs";
// import useSendMessage from "../../hooks/useSendMessage";
// import data from '@emoji-mart/data'
// import Picker from '@emoji-mart/react'
// import { useTheme } from '@mui/material/styles';
// import "../../pages/home/home.css"

// const MessageInput = () => {
//   const [message, setMessage] = useState("");
//   const [showEmojiPicker, setShowEmojiPicker] = useState(false); 
  

//   const { loading, sendMessage } = useSendMessage();
//   const theme = useTheme()

//   const textareaRef = useRef(null);
//   useEffect(() => {
    
//     if (textareaRef.current) {
//       textareaRef.current.style.height = "auto";
//       textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;

//       // scroll
//       const maxHeight = parseInt(window.getComputedStyle(textareaRef.current).lineHeight) * 3;
//       if (textareaRef.current.scrollHeight > maxHeight) {
//         textareaRef.current.style.height = `${maxHeight}px`;
//         textareaRef.current.style.overflowY = "scroll";
//       } else {
//         textareaRef.current.style.overflowY = "hidden";
//       }
//     }
//   }, [message]);


// const handleSubmit = async (e) => {
//   e.preventDefault();

//   if (!message) {
//     return;
//   }

//   await sendMessage(message);
//   setMessage("");
//   // setShowEmojiPicker(false)
// };


// const handleEmojiSelect = (emoji) => {
//   setMessage((prevMessage) => prevMessage + emoji.native);
// };
//   return (
//     <div className=" p-4 mt-auto">
//       <form onSubmit={handleSubmit} action="" className="px-4 my-3 sticky bottom-0">
//         <div className="w-full relative">
//         {/* MESSAGE TYPE AREA  */}
//           <textarea
//   ref={textareaRef}
//   className=" boxScroll outline-none text-xm rounded-full block w-full px-5 py-3 bg-transparent resize-none"
//   style={{
//     boxShadow: 'inset 0px 0px 8px rgba(0, 0, 0, 0.6)',
//     maxHeight: '4.5em',
//     overflowY: 'hidden', 
//     width: 'calc(100% - 20px)',
//     padding: '10px',  
//     fontSize: '16px',  
//   }}
//   placeholder="Enter Your Text"
//   value={message}
//   onChange={(e) => setMessage(e.target.value)}
//   rows="1"
// />


 
//         {/* SEND MESSAGE BUTTON  */}
//           <button
//             type="submit"
//             className="absolute flex text-[12px] items-center justify-center w-7 h-7 bg-[#59082e] text-white rounded-full" 
//             style={{
//               top: "50%",
//               right: "24px",
//               transform: "translateY(-50%) translateX(-10%)",
//                boxShadow: "2px 2px 8px rgba(0, 0, 0, 0.8)"
//             }}
//           >
//             {loading ? (
//               <div className="loading loading-spinner"></div>
//             ) : (
//               <BsSend />
//             )}
//           </button>

//           {/* <Picker theme={theme.palette.mode} data={data} onEmojiSelect={console.log} /> */}

//    {/* EMOJI BUTTON */}
//    <button
//             type="button"
//             className="absolute flex text-[12px] items-center justify-center w-7 h-7 bg-gray-200 text-black rounded-full"
//             style={{
//               top: "50%",
//               right: "60px",
//               transform: "translateY(-50%) translateX(-10%)",
//               boxShadow: "2px 2px 8px rgba(0, 0, 0, 0.8)",
//             }}
//             onClick={() => setShowEmojiPicker(!showEmojiPicker)}
//           >
//             <BsEmojiSmile />   </button>
//     {/* EMOJI PICKER */}
//     {showEmojiPicker && (
//             <div
//               className=" absolute bottom-10 boxScroll rounded-2xl"
//               style={{ boxShadow: "2px 2px 8px rgba(0, 0, 0, 0.8)",   width: "260px", 
//                 height: "240px", 
//                 overflowY: "scroll", 
//                 right: '-220px', }}
//             >
//               <Picker
//                 theme={theme.palette.mode}
//                 data={data}
//                 onEmojiSelect={handleEmojiSelect}
//               />
//             </div>
//           )}
//         </div>
//       </form>
//     </div>
//   );
// };

// export default MessageInput;

import React, { useState, useEffect, useRef } from "react";
import { BsSend, BsEmojiSmile } from "react-icons/bs";
import useSendMessage from "../../hooks/useSendMessage";
import data from '@emoji-mart/data';
import Picker from '@emoji-mart/react';
import { useTheme } from '@mui/material/styles';
import "../../pages/home/home.css";

const MessageInput = () => {
  const [message, setMessage] = useState("");
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);

  const { loading, sendMessage } = useSendMessage();
  const theme = useTheme();

  const textareaRef = useRef(null);
  const emojiPickerRef = useRef(null);
  const emojiButtonRef = useRef(null);

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;

      const maxHeight = parseInt(window.getComputedStyle(textareaRef.current).lineHeight) * 3;
      if (textareaRef.current.scrollHeight > maxHeight) {
        textareaRef.current.style.height = `${maxHeight}px`;
        textareaRef.current.style.overflowY = "scroll";
      } else {
        textareaRef.current.style.overflowY = "hidden";
      }
    }
  }, [message]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (emojiPickerRef.current && !emojiPickerRef.current.contains(event.target) && !emojiButtonRef.current.contains(event.target)) {
        setShowEmojiPicker(false);
      }
    };

    if (showEmojiPicker) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showEmojiPicker]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!message.trim()) {
      return;
    }

    await sendMessage(message.trim());
    setMessage("");
  };

  const handleEmojiSelect = (emoji) => {
    setMessage((prevMessage) => prevMessage + emoji.native);
  };

  // Handle keydown events for textarea
  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) { // Enter key without Shift (to avoid new line)
      e.preventDefault();
      handleSubmit(e);
    }
  };

  return (
    <div className="p-4 mt-auto">
      <form onSubmit={handleSubmit} className="px-4 my-3 sticky bottom-0 flex items-center">
        {/* MESSAGE TYPE AREA */}
        <textarea
          ref={textareaRef}
          className="boxScroll outline-none text-xm rounded-full block flex-1 px-5 py-3 bg-transparent resize-none"
          style={{
            boxShadow: 'inset 0px 0px 8px rgba(0, 0, 0, 0.6)',
            maxHeight: '4.5em',
            overflowY: 'hidden',
            padding: '10px',
            fontSize: '16px',
          }}
          placeholder="Enter Your Text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={handleKeyDown} // Add keydown event listener
          rows="1"
        />

        {/* SEND MESSAGE BUTTON */}
        <button
          type="submit"
          className="flex text-[12px] items-center justify-center w-7 h-7 bg-[#59082e] text-white rounded-full ml-2"
          style={{
            boxShadow: "2px 2px 8px rgba(0, 0, 0, 0.8)"
          }}
        >
          {loading ? (
            <div className="loading loading-spinner"></div>
          ) : (
            <BsSend />
          )}
        </button>

        {/* EMOJI BUTTON */}
        <button
          type="button"
          ref={emojiButtonRef}
          className="flex text-[12px] items-center justify-center w-7 h-7 bg-gray-200 text-black rounded-full ml-2"
          style={{
            boxShadow: "2px 2px 8px rgba(0, 0, 0, 0.8)",
          }}
          onClick={() => setShowEmojiPicker(!showEmojiPicker)}
        >
          <BsEmojiSmile />
        </button>

        {/* EMOJI PICKER */}
        {showEmojiPicker && (
          <div
            ref={emojiPickerRef}
            className="absolute bottom-12 boxScroll rounded-2xl"
            style={{
              boxShadow: "2px 2px 8px rgba(0, 0, 0, 0.8)",
              width: "260px",
              height: "240px",
              overflowY: "scroll",
            }}
          >
            <Picker
              theme={theme.palette.mode}
              data={data}
              onEmojiSelect={handleEmojiSelect}
            />
          </div>
        )}
      </form>
    </div>
  );
};

export default MessageInput;
