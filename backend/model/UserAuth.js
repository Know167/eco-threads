import mongoose from 'mongoose';

const UserAuthSchema = new mongoose.Schema({
    username:{
        type: String,
        required:true,
        unique: true
    },
    password:{
        type: String,
        required: true
    }
    
},{timestamps:true});
// timestamps:true -> will give created at and updated at

export default mongoose.model("UserAuth", UserAuthSchema)