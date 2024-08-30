import React, { useState } from "react";
import { useAuthContext } from "../context/AuthContext";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const handleInputErrors = ({
  username,
  email,
  password,
  confirmPassword,
  gender,
}) => {
  if (!username || !email || !password || !confirmPassword || !gender) {
    toast.error("please fill all the fields");
    return true;
  }
  if (password !== confirmPassword) {
    toast.error("password do not match");

    return true;
  }
  return false;
};

const useSign = () => {
  const [loading, setLoading] = useState(false);
  const { setAuthUser } = useAuthContext();
  const baseUrl = "https://chatapp-backend-rwxo.onrender.com" ;


  const signup = async ({
    username,
    email,
    password,
    confirmPassword,
    gender,
  }) => {
    const checkError = handleInputErrors({
      username,
      email,
      password,
      confirmPassword,
      gender,
    });
    if (checkError) {
      return;
    }

    try {
      setLoading(true);

      const res = await fetch(`${baseUrl}/api/auth/signup`, {
        method: "POST",
        headers: {
          "Content-Type": "Application/json",
        },
        body: JSON.stringify({
          username,
          email,
          password,
          confirmPassword,
          gender,
        }),
      });

      const data = await res.json();
      console.log(data);


      if (data.error) {
        throw new Error(data.error);
      }

      console.log(data);

    localStorage.setItem("user", JSON.stringify(data))

    setAuthUser(data)
    console.log("Sign in successfully"); 

    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return {loading, signup}
};

export default useSign;
