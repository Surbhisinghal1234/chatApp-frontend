import React, { useEffect } from 'react'
import Messages from './Messages'
import MessageInput from './MessageInput'
import useConversation from '../../zustand/useConversation'
import {TiMessages} from "react-icons/ti"
import { useAuthContext } from '../../context/AuthContext'
import wallpaper from "../../assets/wallpaper-1.jpg"
import "../../App.css"


const Messagecontainer = () => {

  const {selectedConversation, setSelectedConversation} = useConversation() 

  useEffect(()=>{

    // cleanup function
    return ()=> setSelectedConversation(null)
  },[setSelectedConversation])
  return (
   <>
   {/* style={{ backgroundImage: `url(${wallpaper})` }}  */}
   <div className='flex flex-col w-[18rem] xs:w-[23rem] lg:w-[23rem] h-[40rem]  py-[3rem] md:py-0 text-white bg-[#381023] rounded-3xl overflow-scroll' style={{ boxShadow: '0px 15px 30px rgba(0, 0, 0, 0.7)' }} >

    {

      !selectedConversation ? (

        <NoChatSelected/>
      ) :(<>
         <div className=" rounded-t-2xl pl-6 py-4 mb-2 text-white">
        <span className='font-bold'>To:</span>
        <span className='text-white ml-2 font-bold'>{selectedConversation ?.username}</span>
       </div>
        <Messages/>
        <MessageInput className=" bg-white p-4 mt-auto"/>
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
