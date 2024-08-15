// import React from 'react'
// import userAvatar from "../../assets/user.png"

// const Message = () => {
//   return (
//     <div>

//       <div className='chat-image avatar'>
//         <div className="w-10 rounded-full ">
//             <img src={userAvatar} alt="user Avatar" />
//         </div>
//       </div>


// <div className='chat-bubble text-white bg-blue-500'>Hello

// </div>
      
//     </div>
//   )
// }

// export default Message


import React from 'react'
import userAvatar from "../../assets/avatar.png"

const Message = () => {
  return (
    <div className="chat chat-end">

      <div className='chat-image avatar'>
        <div className="w-10 rounded-full">
            <img src={userAvatar} alt="user Avatar" />
        </div>
      </div>

      <div className='chat-bubble text-white bg-blue-500'>
        Hello
      </div>
      
      <div className='chat-footer opacity-50 text-slate-950 items-center flex gap-1'>10:41</div>
    </div>
  )
}

export default Message
