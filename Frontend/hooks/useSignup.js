import { useState } from "react"
import toast from "react-hot-toast";

//context API
const useSignup =()=>{
    const [loading,setLoading]=useState(false);

    const signup=async({fullName,username,password,confirmPassword,gender})=>{
      const success=  handleInputErrors({fullName,username,password,confirmPassword,gender})
      if(!success) return;   //If the variable success is not true, exit the function.

      setLoading(true);
     
      try {
        const res = await fetch("http://localhost:5000/api/auth/signup",{
            method:"POST",
            headers:{"Content-Type":"application/json"}, //header is set to "application/json", indicating that the content being sent in the request body will be in JSON format.

            body: JSON.stringify({fullName,username,password,confirmPassword,gender})                      //JSON.stringify() function in JavaScript converts a JavaScript object or value into a JSON string
        })
        const data= await res.json();
        console.log(data);
        
      } catch (error) {
        toast.error(error.message)
      }finally{
        setLoading(false)
      }

      
    }
    return {loading,signup}  //this return statement is providing access to the loading state and the signup function to the caller of the signup function
}


// handling error like any field not filled or passwords do not match
function handleInputErrors({fullName,username,password,confirmPassword,gender}){
    if(!fullName || !username || !password || !confirmPassword || !gender){
        toast.error("Please Fill All The Fields ")
        return false;

    }
    if(password !== confirmPassword){
        toast.error("Passwords Do Not Match")
        return false;
    }
    if(password.length<6){
        toast.error("Password must be atleast 6 Characters Long")
        return false; 
    }
    return true;
    
}

export default useSignup;