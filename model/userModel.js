import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    firstName: String,
    lastName: String,
    mobileNumber: Number,
    email: String,
    password: String
})

const userModel=mongoose.model('user',userSchema)

export default userModel;
