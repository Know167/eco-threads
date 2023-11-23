import Product from "../model/Product.js"
export const createProducts = async (req, res, next) => {
    try {

        const newProduct = new Product({
            ...req.body,
        })

        await newProduct.save()

        res.status(200).json({
            success: true,
            status: 200,
            message: "Product has been created"
        })
    } catch (err) {
        next(err)
    }
}

export const getProducts = async (req, res, next) => {
    try {
        const Productdata = await Product.findOne({ productId: req.params.number })


        res.status(200).json(Productdata);
    } catch (err) {
        next(err)
    }
}

export const getProductList = async (req, res, next) => {

    try {
        const { page = 1 } = req.query.limit
        const { limit = 15 } = req.query.page
        const noOfDocuments = await Product.countDocuments()
        const noOfPages = Math.ceil(noOfDocuments / limit)
        const ProductData = await Product.find()
            .limit(limit)
            .skip((page - 1) * limit)
        res.status(200).json({ 
          status:200,
          success: true,
          message:"Displaying Product list",
          ProductData, 
          noOfPages, 
          limit 
        })

    } catch (err) {
        next(err)
    }
}

export const updateProduct = async (req, res, next) => {
    try {

        console.log("update Product Data")
        
        const productData = await Product.findById(userId)
        const body = req.body

        if (body.productId) throw new Error("You can not pass productId in the payload")


        const updateProduct1 = await User.findByIdAndUpdate(
            ProductId,
            { $set: body },
            { new: true } // updated version of the document will be returned
        )

        if (!updateProduct1) throw new Error("Could not update the product")

        const { password, isAdmin, ...otherInfo } = updateProduct._doc
        res.status(200).json({
            status:200,
            success: true,
            message: "updated product data",
            ProductInfo: otherInfo
        });

    }catch(err){
        next(err)
    } 

}
export const deleteProduct = async (req, res, next) => {
    try {
        await Product.findByIdAndDelete(req.params.id)
        res.status(200).json()
    } catch (err) {
        next(err)
    }
}