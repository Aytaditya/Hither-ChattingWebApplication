import express from "express";
import { sendMessage } from "../endpoints/message.controller.js";
import protectRoute from "../middleware/protectRoute.js";




const router=express.Router();


//The purpose of this protectRoute middleware is likely to perform authorization check before allowing access to the sendMessage handler.
router.post("/send/:id",protectRoute,sendMessage)
                                              //this sendMessage is in messageController.js

export default router;


