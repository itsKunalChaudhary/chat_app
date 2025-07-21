import jwt from "jsonwebtoken";
import User from "../models/user.model.js";

export const protectRoute = async (req, res, next) => {
    try {
        const token = req.cookies.jwt;
        if(!token){
            res.status(401).json({message: "Not authorized, please login"});
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        if(!decoded){
            res.status(401).json({message: "Unauthorized -- Invalid token"});
        }

        const user = await User.findById(decoded.userId).select("-password");

        if(!user){
            res.status(401).json({message: "User Not Found"});
        }

        if (!token) {
            return res.status(401).json({ message: "Not authorized - no token" });
        }


        req.user = user;
        next();
    } catch (error) {
        console.log("Error in Auth Middleware",error.message);
        res.status(500).json({message: "Error in protectRoute Function"});
    }
}