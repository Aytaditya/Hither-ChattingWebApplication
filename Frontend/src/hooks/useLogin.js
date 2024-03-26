import { useState, useEffect } from "react"
import toast from "react-hot-toast";
import { useAuthContext } from "../context/AuthContext";


const useLogin = () => {
    const [loading, setLoading] = useState(false);
    const { setAuthUser } = useAuthContext()
    var showToast = false;

    const login = async (username, password) => {

        const success = handleInputErrors(username, password)
        if (!success) return;

        setLoading(true)

        try {
            const res = await fetch("http://localhost:5000/api/auth/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ username, password })

            })
            const data = await res.json();
            if (data.error) {
                throw new Error(data.error)
            }
            showToast = true;
            localStorage.setItem("chatUser", JSON.stringify(data))

            setAuthUser(data) // //now we will update our context API

            if (showToast){
                toast.success('Logged In Successfully');
               }

        } catch (error) {
            toast.error(error.message);
        } finally {
            setLoading(false)
        }

    }
    return {loading,login} 
}

function handleInputErrors(username,password){
    if(!username || !password){
     toast.error("Please Fill All The Fields")
     return false;
    }
    return true;
}

export default useLogin;