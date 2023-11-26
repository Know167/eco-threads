import mongoose from 'mongoose';

const ProductImagesSchema = new mongoose.Schema({
    productId:{
        type:String,
        required:true,
        unique:true
    },
    imageId:{
        type: String,
        required:true,
        unique: true
    }
    
},{timestamps:true});
// timestamps:true -> will give created at and updated at

export default mongoose.model("ProductImages", ProductImagesSchema)