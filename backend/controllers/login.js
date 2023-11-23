import UserAuth from "../model/UserAuth.js"
import { createError } from "../utils/error.js"
import bcrypt from 'bcrypt'
import jwt from "jsonwebtoken"

const comparePassword = async(password1, password2) =>{
    return await bcrypt.compare(password1, password2)
}
const generateAccessToken = (user) => {


    return jwt.sign({id:user.id, isAdmin:user.isAdmin}, "secret",{
        expiresIn: "7d" //15m or 20m
        // expiresIn: "30m" //15m or 20m, 5s
    })
  };

export const login = async (req, res, next) => {
    try{
        let user = null
            user = await UserAuth.findOne({username: req.body.username})
        
        if(!user) return next(createError(404, "User not found"))
        let pass= req.body.password
        let databasepass = user.password
        console.log(pass)
        console.log(databasepass)

        //const isPasswordCorrect = await comparePassword(req.body.password, user.password)
        if(databasepass == pass){

        

        const accessToken = generateAccessToken(user);
        
        const { password , username } = user._doc
        res.status(200)
        .json({
            success: true,
            status: 200,
            message: "Login successful",
            username: username, 
            token: accessToken,
        })
    }else{
        return next(createError(404,"Password incorrect"))
    }
        
    }catch(err){
        console.log(err)
        next(err)
    }
}