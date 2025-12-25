import mongoose, { connect } from "mongoose";
const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL)
        console.log("DB connected..")
    } catch (error) {
        console.log("error in db",error.message
            
        );
    }
}
export default connectDB;