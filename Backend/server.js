
import express from "express";
import dotenv from "dotenv"
import cookieParser from "cookie-parser"; 
import cors from "cors"

import authRoutes from "./routes/auth.routes.js"
import messageRoutes from "./routes/message.routes.js"
import userRoutes from './routes/user.routes.js'

import connectToDb from "./db/connectToDb.js";


const app = express();

// It cannot work directly from .env file we will use dotenv package
// process.env.PORT in this PORT is case sensitive 
dotenv.config();
const PORT = process.env.PORT;

// Instead of app.get we can use app.use
// app.get("/", (req, res) => {
//     res.send("Hello World");
// });


//app.use(express.json()) is a middleware function that is used to parse incoming request bodies in JSON format.

//app.use(express.json()) essentially tells your Express application to use a middleware function called json() provided by the express package. This middleware specifically focuses on handling JSON-formatted data in incoming requests.

//                MOST IMP THIS LINE SHOULD BE BEFORE WRITING ROUTES OTHERWISE MIDDLEWARE WILL NOT WORK AND WE WONT BE ABLE TO ACCESS VALUES COMING FROM req.body

                              //all middlewares here
app.use(express.json())
app.use(cookieParser());  // to parse the incoming cookie
app.use(cors()) //permission for foregin connection


//It is using routes file
app.use("/api/auth",authRoutes)
app.use("/api/messages",messageRoutes)
app.use("/api/users",userRoutes)   //to get user for sidebar

app.listen(PORT, () => {
    connectToDb();
    console.log(`Running on ${PORT} port`)
});
