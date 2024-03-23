import express from "express";
import { login, logout, signup } from "../endpoints/auth.controller.js";


// It creates a new router object. This router object can be used to define routes for different HTTP methods (GET, POST, PUT, DELETE, etc.) on different URL paths.
const router=express.Router();

// all endpoints in endpoints folder

router.get("/login",login)

router.get("/signup",signup)

router.get("/logout",logout)

export default router;
