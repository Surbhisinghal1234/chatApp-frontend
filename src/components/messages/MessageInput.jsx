import React from 'react'
import {BsSend} from "react-icons/bs"

const MessageInput = () => {
  return (
    <div>
      <form action="" className='px-4 my-3 '>
        <div className='w-full relative'>

        <input className='border text-xm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 text-white' type="text" placeholder='Enter Your Text' />

        <button type='submit ' className=' absolute flex items-center pe-3 inset-y-0 end-0'>

            <BsSend/>
        </button>
        </div>
      </form>
    </div>
  )
}

export default MessageInput
