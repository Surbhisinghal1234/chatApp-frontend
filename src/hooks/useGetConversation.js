
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useAuthContext } from "../context/AuthContext"; 

const useGetConversations = () => {
  const [loading, setLoading] = useState(false);
  const [conversations, setConversations] = useState([]);
  const { authUser } = useAuthContext(); 
  // const baseUrl = "https://chatapp-backend-rwxo.onrender.com"; 
  const baseUrl = "https://chatapp-backend-rwxo.onrender.com" ;


  useEffect(() => {
    const getConversations = async () => {
      try {
        setLoading(true);

        const token = authUser?.token;
        if (!token) {
          throw new Error("No token found");
        }
        const res = await fetch(`${baseUrl}/api/users`, {
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

        setConversations(data);
      } catch (error) {
        toast.error(error.message);
      } finally {
        setLoading(false);
      }
    };

    if (authUser) { 
      getConversations();
    }
  }, [authUser]); 

  return { loading, conversations };
};

export default useGetConversations;



