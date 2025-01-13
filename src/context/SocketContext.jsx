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
  // const baseUrl = import.meta.env.VITE_APP_API_URL || "http://localhost:3000" ;
  const baseUrl = "https://chatapp-backend-rwxo.onrender.com";


  useEffect(() => {
    if (authUser) {
      const socket = io(baseUrl, {
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



