import jwt from 'jsonwebtoken';
import User from '../model/user.model.js';

const protectRoute= async(req,res,next)=>{
    try {

        //we will take authentication from cookies 

        // const token=req.cookies.jwt;   =====> we wont be able to do it like this directly we need to use dependency cookie-parser in server.js as a middleware

        const token = req.cookies.jwt;
        if(!token){
            return res.status(401).json({error:"Unauthorized No token Available"})
        }

        //Once decoded, the resulting decoded object likely contains information such as user IDs, permissions, or other data embedded within the JWT payload.
        const decoded=jwt.verify(token,process.env.JWT_SECRET)
        //: This function is used to verify the JWT.
        //we are decoding this token


        if(!decoded){
            return res.status(401).json({error:"Unauthorized No token Available"})
        }

        //It is called userId because called userId in generateToken.js
        //selecting without password
        const user = await User.findById(decoded.userId).select("--password");

        if(!user){
           return res.status(404).json({error:"User not Found"})
        }

        req.user=user;

        next();
        //Calling next() indicates that this middleware has completed its processing and that Express should now pass control to the next middleware function. If there are no more middleware functions in the stack, Express will proceed to handle the request with the route handler associated with the requested endpoint.

    } catch (error) {
        res.status(500).json({error:"Some Error Occured"})
    }
}

export default protectRoute;