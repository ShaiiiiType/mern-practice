import express from 'express';
import { connectDB } from './config/db.js';
import dotenv from "dotenv";

import productRouter from './route/product.route.js';
import authRouter from './route/auth.route.js';

dotenv.config();

const app = express();

app.use(express.json());

app.get("/",(req, res) => {
    res.send("Yahoo! its working");
})

app.use("/api/products", productRouter);
app.use("/api/auth", authRouter);

app.listen(5000, () => {
    connectDB();
    console.log("Server started at http://localhost:5000"); 
});

