// import React from 'react'

import { createContext, useContext, useState } from "react";

// const AuthContext = () => {
//   return (
//     <div>
      
//     </div>
//   )
// }

// export default AuthContext

export const AuthContext = createContext()

export const useAuthContext = () =>{
    return useContext(AuthContext)
}

export const AuthContextProvider = ({children})=>{
    const [authUser, setAuthUser] = useState(JSON.parse(localStorage.getItem("user")) || null 
   )

   return (
    <AuthContext.Provider  value={{authUser, setAuthUser}}>
        {children}
    </AuthContext.Provider>
   )
}
