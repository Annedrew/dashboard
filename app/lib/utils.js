import mongoose from "mongoose";

export const connectToDB = async () => {
    const connection = {}

    try{
        if (connection.isConnected) {
            return;
        } else {
            const db = await mongoose.connect(process.env.MONGODB);
            connection.isConnected = db.connections[0].readyState;
        }
    } catch (error) {
        console.log(`Connect failed: ${error}`);
    }
}