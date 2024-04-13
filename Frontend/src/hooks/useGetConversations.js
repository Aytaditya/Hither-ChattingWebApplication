import { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

const useGetConversations = () => {
    const [loading, setLoading] = useState(false);
    const [conversations, setConversations] = useState([]);

    useEffect(() => {
        const fetchConversations = async () => {
            setLoading(true);
            try {
                const response = await axios.get("http://localhost:5000/api/users", {
                    withCredentials: true
                });
                setConversations(response.data); // Assuming response.data is a JSON object
            } catch (error) {
                toast.error(`Error fetching conversations: ${error.message}`);
            } finally {
                setLoading(false);
            }
        };

        fetchConversations();
    }, []);

    return { loading, conversations };
};

export default useGetConversations;
