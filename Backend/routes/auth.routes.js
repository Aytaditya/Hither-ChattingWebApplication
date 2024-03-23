import express from "express";
import { login, logout, signup } from "../endpoints/auth.controller.js";


// It creates a new router object. This router object can be used to define routes for different HTTP methods (GET, POST, PUT, DELETE, etc.) on different URL paths.
const router=express.Router();

// all endpoints in endpoints folder
//Its using from endpoints folder
router.post("/login",login)

router.post("/signup",signup)

router.post("/logout",logout)

export default router;
