
import express from "express";
import dotenv from "dotenv"
import authRoutes from "./routes/auth.routes.js"
import connectToDb from "./db/connectToDb.js";

const app = express();

// It cannot work directly from .env file we will use dotenv package
// process.env.PORT in this PORT is case sensitive 
dotenv.config();
const PORT = process.env.PORT;

// Instead of app.get we can use app.use
app.get("/", (req, res) => {
    res.send("Hello World");
});

app.use("/api/auth",authRoutes)


app.listen(PORT, () => {
    connectToDb();
    console.log(`Running on ${PORT} port`)
});
