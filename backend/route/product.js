import express from "express"
import { login } from "../controllers/login.js";
import { verifyUser } from "../utils/verifyToken.js";
import router from "./auth.js";
import { createProducts, deleteProduct, getProductList, updateProduct } from "../controllers/Products";

router.get("/createProducts",verifyUser,createProducts)
router.get("/getProductList",verifyUser,getProductList)
router.get("/updateProduct",verifyUser,updateProduct)
router.get("/deleteProduct",verifyUser,deleteProduct)

export default router
