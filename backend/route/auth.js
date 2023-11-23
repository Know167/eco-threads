import express from "express"
import { login } from "../controllers/login.js";
import { verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();

router.post("/login",login)
router.post("/isadmin", verifyAdmin, (req, res, next)=>{
    try{
        res.status(200).json({
            status:200,
            success: true,
            isAdmin : true,
            Message : "It is Admin"
        })
    }catch(err){
        next(err)
    }
})
export default router
