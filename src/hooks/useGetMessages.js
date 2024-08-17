import React, { useEffect, useState } from "react";
import useConversation from "../zustand/useConversation";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const useGetMessages = () => {
  const [loading, setLoading] = useState(false);

  const { messages, setMessages, selectedConversation } = useConversation();
  // const baseUrl = "https://chatapp-backend-rwxo.onrender.com"


  useEffect(() => {
    const getMessages = async () => {
      try {
        setLoading(true);

        const res = await fetch(`/api/messages/${selectedConversation._id}`);

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

    if(selectedConversation?._id){
        getMessages()
    }
  }, [selectedConversation?._id, setMessages]);
  return {loading, messages}
};

export default useGetMessages;
