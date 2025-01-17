import React, { useEffect } from 'react'
import Messages from './Messages'
import MessageInput from './MessageInput'
import useConversation from '../../zustand/useConversation'
import {TiMessages} from "react-icons/ti"
import { useAuthContext } from '../../context/AuthContext'
import wallpaper from "../../assets/wallpaper-1.jpg"
import "../../App.css"
import "../../pages/home/home.css"

const Messagecontainer = () => {

  const {selectedConversation, setSelectedConversation} = useConversation() 

  useEffect(()=>{

    // cleanup function
    return ()=> setSelectedConversation(null)
  },[setSelectedConversation])

  return (
   <>
   <div className=' flex flex-col w-[19rem] xs:w-[23rem] lg:w-[23rem] h-[40rem] text-white bg-[#381023] rounded-3xl' style={{ boxShadow: '0px 15px 30px rgba(0, 0, 0, 0.7)' }} >

    {

      !selectedConversation ? (

        <NoChatSelected/>
      ) :(<>
         <div className=" bg-[#59082e] rounded-t-2xl pl-6 py-4 mb-2 text-white  flex items-center gap-2">
        <img src={selectedConversation ?.profilePic} alt="" className='h-10 w-10' />
        <span className='text-white ml-2 font-bold'>
          {selectedConversation ?.username}</span>
         
       </div>
        <Messages className="flex-1" />
        <MessageInput className=" "/>
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
    <div className='flex items-center justify-center w-full h-full'   >
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
