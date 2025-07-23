import express from 'express';
import dotenv from 'dotenv';
import authRoutes from "./routes/route.auth.js"
import messageRoutes from "./routes/route.message.js"
import {connectDB} from "./lib/db.js";
import cookieParser from "cookie-parser";
import cors from "cors";
import { app, server } from "./lib/socket.js";

dotenv.config();

const PORT = process.env.PORT;

app.use(express.json());
app.use(cookieParser());
// app.use(cors({
//     origin: "http://localhost:5173",
//     credentials: true,
// }))
const allowedOrigins = [
    "http://localhost:5173",
    //"https://chatnet-frontend.vercel.app", // update to your Vercel frontend URL
];

app.use(cors({
    origin: (origin, callback) => {
        if (!origin || allowedOrigins.includes(origin)) {
            callback(null, true);
        } else {
            callback(new Error("Not allowed by CORS"));
        }
    },
    credentials: true,
}));



app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);

server.listen(PORT, () => {
    console.log('Server is running on Port:'+ PORT);
    connectDB();
});