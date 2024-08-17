import React, { useState } from "react";
import { useAuthContext } from "../context/AuthContext";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const handleInputErrors = ({email,password})=>{


    if(!email || !password){
        toast.error("please fill all the feilds")


        return true
    }
    return false

}
const useLogin = () => {
 
    const [loading,setLoading] = useState(false)
    const {setAuthUser} = useAuthContext()


    const baseUrl = "https://chatapp-backend-rwxo.onrender.com";
    const login = async (email,password) =>{
        const checkError = handleInputErrors(
            {
                email,
                password,

            }
        )

        if(checkError){
            return 
        }

        try{

            setLoading(true)
       const res =  await fetch(`${baseUrl}/api/auth/login`,{
        method:"POST",
        headers:{
            "Content-Type":"application/json",


        },
        body:JSON.stringify({
            email,password
        })

       })

       const data = await res.json()
       if(data.error){
        throw new Error (data.error)
       }

       localStorage.setItem("user", JSON.stringify(data))

       setAuthUser(data)
        }
        catch(error){
            toast.error(error.message)
        }
        finally{
            setLoading(false)
        }
        
    }
    return {loading, login}
}

export default useLogin
