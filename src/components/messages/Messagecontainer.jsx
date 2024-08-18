import React, { useEffect } from 'react'
import Messages from './Messages'
import MessageInput from './MessageInput'
import useConversation from '../../zustand/useConversation'
import {TiMessages} from "react-icons/ti"
import { useAuthContext } from '../../context/AuthContext'

const Messagecontainer = () => {

  const {selectedConversation, setSelectedConversation} = useConversation() 

  useEffect(()=>{

    // cleanup function
    return ()=> setSelectedConversation(null)
  },[setSelectedConversation])
  return (
   <>
   <div className='flex flex-col  bg-slate-800 mb-4 '>
    {

      !selectedConversation ? (

        <NoChatSelected/>
      ) :(<>
         <div className="bg-slate-500 px-4 py-2 mb-2 ">
        <span>To:</span>
        <span className='text-gey-900 font-bold'>{selectedConversation ?.username}</span>
       </div>
        <Messages/>
        <MessageInput/>
    </>

      )
    }
</div>

   </>
  )
}


const NoChatSelected=()=>{

  const {authUser} = useAuthContext()

  // const {selectedConversation, setSelectedConversation} = useConversation() 
  return (
    <div className='flex items-center justify-center w-full h-full'>
      <div className='px-4 text-center font-semibold flex flex-col items-center gap-2 ms:text-xl '>
        <p>Welcome {authUser.username}  </p>
        <img src={authUser.profilePic} className='w-20 aspect-square' alt="" />
        <p>Tap on a chat to start a conversation!</p>
        <TiMessages className='text-3xl md:text-6xl text-center' />
      </div>
    </div>
  )
}
export default Messagecontainer
