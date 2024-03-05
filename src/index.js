// require('dotenv').config({path: './env'})
import dotenv from "dotenv";

import connetDB from "./db/index.js";


dotenv.config({
    path: "./env"
})

connetDB()









/*
import express from "express";
const app = express();

;( async () => {
    try {
        await mongoose.connect.connect();(`${process.env.MONGODB_URI}/${DB_NAME}`);
        app.on("error",(error) => {
            console.log("ERR: ", error);
            throw new error
        })

        app.listen(process.env.PORT, () => {
            console.log(`App listening on ${process.env.PORT}`);
        })
    } catch (error) {
        console.error("ERROR: ",error)
        throw new error
    }
})()
*/
