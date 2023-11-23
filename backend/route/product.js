import express from "express"
import { login } from "../controllers/login.js";
//import { verifyUser } from "../utils/verifyToken.js";
import router from "./auth.js";
import { createProducts, deleteProduct, getProductList, updateProduct } from "../controllers/Products.js";

router.post("/createProducts",createProducts)
router.get("/getProductList",getProductList)
router.put("/updateProduct",updateProduct)
router.post("/deleteProduct",deleteProduct)

export default router
