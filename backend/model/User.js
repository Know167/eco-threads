import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
    userId:{
        type:String,
        required:true,
        unique:true
    },
    username:{
        type: String,
        required:true,
        unique: true
    },
    email:{
        type: String,
        required:true,
        unique: true
    },
    isAdmin:{
        type: Boolean,
        default: false
    },
    phone:{
        type:String,
        required:true
    }
    
},{timestamps:true});
// timestamps:true -> will give created at and updated at

export default mongoose.model("User", UserSchema)