import mongoose from 'mongoose';

const RefreshTokenSchema = new mongoose.Schema({
    "userId": {
        type: String,
        required:true
    },
    "refresh_token": {
        type: String
    },
  
},{timestamps:true});
// timestamps:true -> will give created at and updated at

export default mongoose.model("RefreshToken",RefreshTokenSchema)