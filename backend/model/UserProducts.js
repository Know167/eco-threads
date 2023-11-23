import mongoose from 'mongoose';

const UserProductsschema = new mongoose.Schema({
    userId:{
        type: String,
        required:true,
        unique: true
    },
    productId:{
        type: String,
        required: true
    }
    
},{timestamps:true});
// timestamps:true -> will give created at and updated at

export default mongoose.model("UserPeoducts", UserProductsschema)