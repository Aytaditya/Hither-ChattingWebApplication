import mongoose from "mongoose";

// we are making user schema model in this file 

//defining a user Schema 
const userSchema=new mongoose.Schema({
    fullName:{
        type:String,
        required:true
    },
    username:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
        minlength:6
    },
    gender:{
        type:String,
        required:true,
        enum:["male","female"]
    },
    profilePic:{
        type:String,
        default:""
    }
},{timestamps:true});

const User=mongoose.model("User",userSchema);    //name of collection in which date will be stored is user 
// and userSchema is name of my schema

export default User;