import mongoose from 'mongoose';

const ImageSchema = new mongoose.Schema({
    
    imageId:{
        type: String,
        required:true,
        unique: true
    },
    imageBase64:{
        type:String,
        required:true
    }
    
},{timestamps:true});
// timestamps:true -> will give created at and updated at

export default mongoose.model("Image", ImageSchema)