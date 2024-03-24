

// this is for sidebar 

import User from "../model/user.model.js";


export  const getUserForSidebar=async(req,res)=>{
    try {
        // we are able to use this because of milddleware protectRoute cant be used directly
        const loggedInUserId=req.params._id;

        const filteredUsers= await User.find({_id:{$ne:loggedInUserId}}).select("-password")
        //This retrieves all user documents from a MongoDB collection named "User" except for the one whose _id matches the loggedInUserId

        res.status(200).json(filteredUsers)


    } catch (error) {
        res.status(500).json({error:"Internal Server Error"})
    }
}