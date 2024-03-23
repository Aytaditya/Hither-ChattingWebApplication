import mongoose from 'mongoose';


const connectToDb=async()=>{
    try {
        //we dont need dotenv to access MONGO_DB_URI here because we already have set environment variables elsewhere in our application or in deployement variable. Used in PORT hence can be used directly from now on

        await mongoose.connect(process.env.MONGO_DB_URI);
        console.log("Connected to MongoDb Atlas server ")

    } catch (error) {
        console.log("Error connecting to MOngoDb")
    }
}
export default connectToDb;