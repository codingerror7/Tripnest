import express from "express"
import dotenv from "dotenv";
import connectDB from "./config/db.js"
import authRouter from "./routes/auth.route.js";
import cookieParser from "cookie-parser";
import cors from "cors"
dotenv.config();
let port = process.env.port || 6000

const app = express();
app.use(cors());
app.use(express.json());
app.use(cookieParser());

app.use("/api/auth",authRouter);
app.get("/",(req,res)=>{
    res.send("runing tripnest..");
})

app.listen(port,()=>{
    connectDB();
    console.log(`running at ${port}`)
})