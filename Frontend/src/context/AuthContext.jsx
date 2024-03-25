
import { useContext, useState } from "react";
import { createContext } from "react";

//creating a context

export const AuthContext =createContext();

export const AuthContextProvider=({children})=>{
     
    const [authUser,setAuthUser]=useState(JSON.parse(localStorage.getItem("chatUser"))|| null)                          //JSON.parse() is a JavaScript function that parses a JSON string, converting it into a JavaScript object

    return <AuthContext.Provider value={{authUser,setAuthUser}}>
        {children}
    </AuthContext.Provider>
}

export const useAuthContext=()=>{
    return useContext(AuthContext)
}