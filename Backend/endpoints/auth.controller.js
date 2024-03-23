
import User from "../model/user.model.js";
import bcryptjs from "bcryptjs";
import generateTokenAndSetCookie from "../utils/generateToken.js";

export const signup=async(req,res)=>{
   try {
    //cant directly use this value we need middlware to bring this values from model in which date is stored to us
    const {fullName,username,password,confirmPassword,gender}=req.body;

                 //matching password with confirm password

    if(password!==confirmPassword){
       return res.status(400).json({error:"Password and confirm Password does not match"})
    }
                 //searching if username already exist in database or not

    const user=await User.findOne({username});
    if(user){
        return res.status(400).json({error:"Username already exists"})
    }

                //hashing user password here before creating user

    const salt=await bcryptjs.genSalt(10);
    //The higher the number of rounds, the more secure the generated salt will be but more slower it will be 
    //  the code generates a salt for hashing passwords asynchronously with bcryptjs, using 10 rounds of hashing.

    const hashedPassword=await bcryptjs.hash(password,salt);


                        //Profile pic feature 
    const boyProfilePic=`https://avatar.iran.liara.run/public/boy?username=${username}`
    const girlProfilePic=`https://avatar.iran.liara.run/public/girl?username=${username}`;


            //we are exporting User from model user.model.js
    const newUser =new User({
        fullName,
        username,
        password:hashedPassword,
        gender,
        profilePic:gender==="male" ? boyProfilePic : girlProfilePic
    })

        //Saving the new User to database
     await newUser.save();

      if(newUser){
         
        //now we will generate jwt token here and then send this as response
     generateTokenAndSetCookie(newUser._id,res)

          //response we will get
     res.status(201).json({
        _id:newUser.id,
        fullName:newUser.fullName,
        username:newUser.username,
        profilePic:newUser.profilePic   
     })
      }
      else{
        res.status(400).json({error:"Invalid User data"})
      }

   } 
   catch (error) {
    
    res.status(500).json({error:"Something went Wrong, Internal Server error"})
   }
}

                      //ROUTER-2
export const login= async(req,res)=>{
    try {
        const { username, password } = req.body;
    
                                           //here
        // username is comming from req.body

        //User.findOne({ username }) method is searching for a user in your database where the username field matches the username extracted from the req.body

        //user.password refers to the hashed password stored in the user document retrieved from the database


        const user = await User.findOne({ username });
    
        if (!user ) {
            return res.status(401).json({ error: "Invalid Username or Password" });
        }
     
        const isPasswordCorrect = await bcryptjs.compare(password, user.password);
    
        if (!isPasswordCorrect ) {
            return res.status(401).json({ error: "Invalid Username or Password" });
        }
        
    
        // Generating token and setting cookie
        generateTokenAndSetCookie(user._id, res);
    
        // Sending success response
        res.status(200).json({
            _id: user.id,
            fullName: user.fullName,
            username: user.username,
            profilePic: user.profilePic
        });
    
    } catch (error) {
        
        res.status(500).json({ error: "Internal server error" });
    }
}    


                   // ROUTE-3
export const logout=(req,res)=>{
    try {
        //by assigning empty string we are clearing the value of jwt token 
        //{ maxAge: 0 }: This is an options object specifying the maximum age of the cookie. Setting maxAge to 0 means that the cookie will immediately expire. This effectively deletes the cookie because as soon as it's set, it's considered expired.
        res.cookie("jwt","",{maxAge:0});
        res.status(200).json({message:"Logged out successfully"})
    } catch (error) {
        res.status(500).json({ error: "Internal server error" });
    }
}