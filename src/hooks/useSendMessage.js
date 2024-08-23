import React, { useState } from 'react';
import useConversation from '../zustand/useConversation';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useAuthContext } from '../context/AuthContext'; 

const useSendMessage = () => {
    const [loading, setLoading] = useState(false);
    const { messages, setMessages, selectedConversation } = useConversation();
    const { authUser } = useAuthContext(); 
    // const baseU"rl = "https://chatapp-backend-rwxo.onrender.com";
  const baseUrl = "https://chatapp-backend-rwxo.onrender.com"


    const sendMessage = async (message) => {
        try {
            setLoading(true);

            // Retrieve token from AuthContext
            const token = authUser?.token;
            if (!token) {
                throw new Error("No token found");
            }

            const res = await fetch(`${baseUrl}/api/messages/send/${selectedConversation._id}`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}` 
                },
                body: JSON.stringify({ message }),
            });

            if (!res.ok) {
                throw new Error(`Error: ${res.status} ${res.statusText}`);
            }

            const data = await res.json();
            if (data.error) {
                throw new Error(data.error);
            }

            setMessages([...messages, data]);
        } catch (error) {
            toast.error(error.message);
        } finally {
            setLoading(false);
        }
    };

    return { sendMessage, loading };
};

export default useSendMessage;


