// require("dotenv").config{path: './env'};
import  dotenv from "dotenv";
import connectDB from "./db/db.js";


dotenv.config({
    path: "./env"
})


connectDB()






























/*
import mongoose from "mongoose";
import { DB_NAME } from "./constants";


import express from "express";
const app = express();
// 1st way to connect
// function connectDB(){}

// connectDB()

// 2nd way to connect
;( async () =>{
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        app.on("error", (error) => {
            console.log("ERR:", error);
            throw error
        })

        app.listen(process.env.PORT || 3000,
            () => {
                console.log(`Server is running on port ${process.env.PORT}`);
            })

    } catch (error) {
        console.error("ERROR", error);
        throw error
    }
})()
*/

