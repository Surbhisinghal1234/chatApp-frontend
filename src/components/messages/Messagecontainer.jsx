import React from 'react'
import Messages from './Messages'
import MessageInput from './MessageInput'

const Messagecontainer = () => {
  return (
   <>
   <div className='flex flex-col md:min-w-[20rem]'>

   <div className="bg-slate-500 px-4 py-2 mb-2">
    <span>To:</span>
    <span className='text-gey-900 font-bold'>ss</span>
   </div>

    <Messages/>
    <MessageInput/>
</div>


   </>
  )
}

export default Messagecontainer
