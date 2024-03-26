import { useState } from "react";
import { useAuthContext } from "../context/AuthContext";
import toast from "react-hot-toast";



const useLogout = () => {
    const [loading, setLoading] = useState();
    const {setAuthUser}=useAuthContext()
    var showToast=false;

    const logout = async () => {
        setLoading(true);
        try {
            const res = await fetch("http://localhost:5000/api/auth/logout", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
            })

            const data = await res.json();
            console.log(data)
            if (data.error) {
                throw new Error(data.error)
            }

            showToast=true;

            localStorage.removeItem("chatUser")  //now after doing this we need to update our context API currenlty authUser has value 

            setAuthUser(null)

            if(showToast){
                toast.success("User Logged Out Successfully")
            }

        } catch (error) {
                toast.error(error.message)
        }
    }
    return {loading,logout}

}


export default useLogout;