import mongoose from 'mongoose';


const connectToDb=async()=>{
    try {
     
        await mongoose.connect(process.env.MONGO_DB_URI);
        console.log("Connected to MongoDb Atlas server ")

    } catch (error) {
        console.log("Error connecting to MOngoDb")
    }
}
export default connectToDb;