import mongoose from "mongoose";

export const connectDB = async()=>{
    try{
        const connection = await mongoose.connect(`mongodb+srv://niladri:niladri@cluster0.gufczep.mongodb.net/?retryWrites=true&w=majority`)
        console.log(`Connection Successful`)
    }catch(e){
        console.log(`Server error occured - ${e}`)
    }
}