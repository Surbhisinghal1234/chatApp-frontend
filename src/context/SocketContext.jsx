import React, { createContext, useEffect, useState } from 'react'
import { useAuthContext } from './AuthContext'
import { io } from 'socket.io-client'

 export  const SocketContext = createContext()

export const SocketContextProvider = ({children})=>{
    const [socket, setSocket] = useState(null)
    const [onlineUsers, setOnlineUsers] = useState([])
    const {authUser} = useAuthContext()

    useEffect(()=>{

      if(authUser){
        const socket = io
      }


    },[authUser])
}





// export default SocketContext
