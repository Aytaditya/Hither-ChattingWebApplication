import jwt from 'jsonwebtoken';

//the generateTokenAndSetCookie function generates a JSON Web Token (JWT) using the jsonwebtoken library and then sets it as a cookie in the HTTP response
const generateTokenAndSetCookie=(userId,res)=>{
    const token=jwt.sign({userId},process.env.JWT_SECRET,{
        expiresIn:'15d'
    })
    res.cookie("jwt",token,{
        maxAge:15*24*60*60*1000, 
        httpOnly:true, // prevents XXS attacks cross-site scripting attacks
        sameSite:"strict" , //Used to prevent attacks
        secure:process.env.NODE_ENV !=="development"
    })
}

export default generateTokenAndSetCookie;