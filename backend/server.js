import express from 'express';
import { connectDB } from './config/db.js';
import dotenv from "dotenv";

import productRouter from './route/product.route.js';

dotenv.config();

const app = express();

app.use(express.json());

app.get("/",(req, res) => {
    res.send("Yahoo! its working");
})

app.get("/test",(req, res) => {
    res.send("Yahoo! its test working");
})


// For products 
app.use("/api/products", productRouter);
//
app.listen(5000, () => {
    connectDB();
    console.log("Server started at http://localhost:5000"); 
});

