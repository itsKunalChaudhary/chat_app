import express from 'express';
import authRoutes from "./routes/route.auth.js"
const app = express();

app.use("/api/auth", authRoutes);

app.listen(5001, () => {
    console.log('Server is running on port 5001');
});