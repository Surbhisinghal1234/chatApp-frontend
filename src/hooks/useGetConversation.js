

import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useAuthContext } from "../context/AuthContext"; // Adjust the path as necessary

const useGetConversations = () => {
  const [loading, setLoading] = useState(false);
  const [conversations, setConversations] = useState([]);
  const { authUser } = useAuthContext(); 

  useEffect(() => {
    const getConversations = async () => {
      try {
        setLoading(true);

        const token = authUser?.token;
        if (!token) {
          throw new Error("No token found");
        }

        // Fetch request with token
        const res = await fetch("/api/users", {
          headers: {
            "Authorization": `Bearer ${token}`, // Include the token in the Authorization header
            "Content-Type": "application/json"
          }
        });

        // Check if response status is ok
        if (!res.ok) {
          throw new Error(`Error: ${res.status} ${res.statusText}`);
        }

        const data = await res.json();

        // Check if the response contains error
        if (data.error) {
          throw new Error(data.error);
        }

        // Set conversations data to state
        setConversations(data);
      } catch (error) {
        // Display error message
        toast.error(error.message);
      } finally {
        // Reset loading state
        setLoading(false);
      }
    };

    if (authUser) { // Ensure authUser is available before fetching
      getConversations();
    }
  }, [authUser]); 

  return { loading, conversations };
};

export default useGetConversations;



