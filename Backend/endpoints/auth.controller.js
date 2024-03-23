
import User from "../model/user.model.js";

export const signup=async(req,res)=>{
   try {
    //cant directly use this value we need middlware to bring this values from model in which date is stored to us
    const {fullName,username,password,confirmPassword,gender}=req.body;

    //matching password with confirm password
    if(password!==confirmPassword){
       return res.status(400).json({error:"Password and confirm Password does not match"})
    }

    const user=await User.findOne({username});
    if(user){
        return res.status(400).json({error:"Username already exists"})
    }


    //Profile pic feature 
    const boyProfilePic=`https://avatar.iran.liara.run/public/boy?username=${username}`
    const girlProfilePic=`https://avatar.iran.liara.run/public/girl?username=${username}`;

//we are exporting User from model user.model.js
    const newUser =new User({
        fullName,
        username,
        password,
        gender,
        profilePic:gender==="male" ? boyProfilePic : girlProfilePic
    })
        //Saving the new User to database
     await newUser.save();

     res.status(201).json({
        _id:newUser.id,
        fullName:newUser.fullName,
        username:newUser.username,
        profilePic:newUser.profilePic
        
     })

   } 
   catch (error) {
    console.log(error.message)
    res.status(500).json({error:"Something went Wrong, Internal Server error"})
   }
}

export const login=(req,res)=>{
    res.send("This is login page")
}

export const logout=(req,res)=>{
    res.send("This is logout page")
}