// import jwt from "jsonwebtoken"
// import { createError } from "./error.js"

// export const verifyToken = (req,res,next) => {
//     try{        
//         const token = req.headers["x-access-token"];
    
//         console.log("token-header")
//         console.log(token)

//         if(!token){
//             return res.status(404).json({
//                 success: false,
//                 status: "true",
//                 message: "Please pass a valid token",
//                 stack: "Error no token found"
//             })
//         }

//         jwt.verify(token, process.env.JWT, (err, user)=>{
//             if(err) return next(createError(403, "Token is not valid"))
//             if(! user) return next(createError(403, "Token is not valid"))
//             if(user?.rt) return next(createError(403, "Token is not valid"))
//             if(user?.status) return next(createError(403, "Token is not valid"))


//             req.user = user
//             console.log("user",user)
//             //going to next oprtation...
//             next()
//         })

//     }catch(e){
//         next(createError(403, "Token is not valid"))
//     }
// }
// //middle ware to verify id the user is admin or himself before deleting or updating an account
// export const verifyUser = (req,res,next) =>{

//     console.log("inside user verifier")
//     //calling a middle ware from another one and waiting for it's result
//     verifyToken(req,res, ()=>{ // next has been removed from the param, otherwise it will go to user route
//         try{
//             console.log("params",req.params)
//             console.log("myreq",req.user)
//             if(req.user.id == req.params.id || req.user.isAdmin){
//                 next()
//             }else{
//                 return next(createError(403, "You are not authorized"))
//             }
//         }catch(e){
//             console.log(e)
//             next(e)
//         }
//     })
// }



// //middle ware to verify id the user is admin or himself before deleting or updating an account
// export const verifyAdmin = (req,res,next) =>{

//     console.log("inside admin verifier")
//     //calling a middle ware from another one and waiting for it;s result
//     verifyToken(req,res, ()=>{
//         if(req.user.isAdmin){
//             next()
//         }else{
//             return next(createError(403, "You are not an admin"))
//         }
//     })
// }

