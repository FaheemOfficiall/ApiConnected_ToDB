import mongoose from "mongoose";


const connectDB=async(dburl,dbName)=>{
    try {
        await mongoose.connect(dburl+dbName);
        console.log("connected to db");
        
    } catch (error) {
        console.log("err connecting in db");
    }
}

export default connectDB