import dotenv from "dotenv";

import mongoose from "mongoose";
import connectDB from "./db/index.js";

dotenv.config({
    path:'./env'
})


connectDB()
























/*
import e from "express";
const app = express()
// This is known as IIFE(semicolon is used for cleaner look)
;(async()=>{
    try{
        await mongoose.connect(`${process.env.MONGODB_URL}/{DB_NAME}`)   
        app.on("error",(error)=>{
            console.log("Error",error);
            throw error 
        })
        app.listen(process.env.PORT,()=>{
            console.log(`App is listening on port ${process.env.PORT}`)
        })
    } catch (error){
      console.error("ERROR:", error)
      throw err
    }
})()*/