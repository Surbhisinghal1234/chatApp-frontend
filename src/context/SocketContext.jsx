// import React, {useContext, createContext, useEffect, useState } from 'react'
// import { useAuthContext } from './AuthContext'
// import { io } from 'socket.io-client'

//  export  const SocketContext = createContext()

//  export  const useSocketContext = ()=>{
//   return useContext (SocketContext)
//  }

// export const SocketContextProvider = ({children})=>{
//     const [socket, setSocket] = useState(null)
//     const [onlineUsers, setOnlineUsers] = useState([])
//     const {authUser} = useAuthContext()

//     useEffect(()=>{

//       if(authUser){
//         const socket = io("http://localhost:3000",{

//         query:{
//           userId : authUser._id
//         }
//       })

//         setSocket(socket)

//         socket.on("getOnlineUsers", (users)=>{
//           setOnlineUsers(users)
//         })
//         return () => socket.close()
//       }
//       else{
//         if(socket){
//           socket.close()
//           setSocket(null)

//         }
//       }


//     },[authUser])
//     return (<SocketContext.Provider  value={{socket, onlineUsers}}>
//       {children}
//     </SocketContext.Provider>)
// }

// export default SocketContext

import React, { useContext, useEffect, useState } from "react"
import { createContext } from "react"
import { useAuthContext } from "./AuthContext"
import { io } from "socket.io-client"

export const SocketContext = createContext()

export const useSocketContext = () => {
  return useContext(SocketContext)
}

export const SocketContextProvider = ({ children }) => {
  const [socket, setSocket] = useState(null)
  const [onlineUsers, setOnlineUsers] = useState([])
  const { authUser } = useAuthContext()

  useEffect(() => {
    if (authUser) {
      const socket = io(
        // "http://localhost:3000", 
        // "https://chatapp-backend-rwxo.onrender.com",
        "https://chatapp-backend-rwxo.onrender.com",
        {
        query: {
          userId: authUser._id,
        },
      })

      setSocket(socket)

      socket.on("getOnlineUsers", (users) => {
        setOnlineUsers(users)
      })

      return () => socket.close()
    } else {
      if (socket) {
        socket.close()
        setSocket(null)
      }
    }
  }, [authUser])

  return (
    <SocketContext.Provider value={{ socket, onlineUsers }}>
      {children}
    </SocketContext.Provider>
  )
}

export default SocketContext
