import express from 'express'
import protectRoute from '../middleware/protectRoute.js';
import { getUserForSidebar } from '../endpoints/user.controller.js';


const router=express.Router();


//protectRoute make sures that users without token will not be able to call

router.get("/",protectRoute,getUserForSidebar)    //to get users for sidebar

export default router;