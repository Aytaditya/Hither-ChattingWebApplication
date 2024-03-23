
export const signup=async(req,res)=>{
   try {
    const {fullName,userName,confirmPassword,gender}=req.body;
   } 
   catch (error) {
    
   }
}

export const login=(req,res)=>{
    res.send("This is login page")
}

export const logout=(req,res)=>{
    res.send("This is logout page")
}