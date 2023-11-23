import mongoose from 'mongoose';

const ProductSchema = new mongoose.Schema({
    productId:{
        type: String,
        required:true,
        unique: true
    },
    name:{
        type: String,
        required: true
    },
    title:{
        type: String,
        required:true,
    },
    category:{
        type: String,
        required: true
    },
    price:{
        type: String,
        required:true,
    }
   
},{timestamps:true});
// timestamps:true -> will give created at and updated at

export default mongoose.model("Product", ProductSchema)