import React, { useEffect, useState } from "react";
import useConversation from "../zustand/useConversation";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useAuthContext } from "../context/AuthContext"; 

const useGetMessages = () => {
  const [loading, setLoading] = useState(false);
  const { messages, setMessages, selectedConversation } = useConversation();
  const { authUser } = useAuthContext(); 
  // const baseUrl = "https://chatapp-backend-rwxo.onrender.com"; 
  const baseUrl = import.meta.env.VITE_APP_API_URL || "http://localhost:3000" ;


  useEffect(() => {
    const getMessages = async () => {
      try {
        setLoading(true);

        const token = authUser?.token;
        if (!token) {
          throw new Error("No token found");
        }

        if (!selectedConversation?._id) {
          throw new Error("No selected conversation found");
        }

        const res = await fetch(`${baseUrl}/api/messages/${selectedConversation._id}`, {
          method: "GET",
          headers: {
            "Authorization": `Bearer ${token}`, 
            "Content-Type": "application/json"
          }
        });

        if (!res.ok) {
          throw new Error(`Error: ${res.status} ${res.statusText}`);
        }

        const data = await res.json();

        if (data.error) {
          throw new Error(data.error);
        }

        setMessages(data);
      } catch (error) {
        toast.error(error.message);
      } finally {
        setLoading(false);
      }
    };

    if (selectedConversation?._id) {
      getMessages();
    }
  }, [selectedConversation?._id, setMessages, authUser?.token]);

  return { loading, messages };
};

export default useGetMessages;
