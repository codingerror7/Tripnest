import express from "express";
import { login,signup,logout } from "../controllers/auth.controller.js";
// import listing from "../model/listing.model.js";

const authRouter = express.Router();
authRouter.post("/signup",signup);
authRouter.post("/login",login);
authRouter.post("/logout",logout);
// authRouter.post("/listing",listing);
export default authRouter;