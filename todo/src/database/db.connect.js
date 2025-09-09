import mongoose from "mongoose"
import DBname from "../constant.js"

const connectDB = async () => {
    try{
        const response = await mongoose.connect(process.env.MONGODB_URI)
        console.log(`MongoDB connected :: ${response.connection.host}`)
    }catch(error){
        console.log(`ERROR :: ${error?.message}`)
    }
}

export default connectDB;