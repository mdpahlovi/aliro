import mongoose from "mongoose";

const connection = {};

const connect = async () => {
    if (connection.isConnected) {
        console.log("Already Connected");
        return;
    }
    if (mongoose.connections.length > 0) {
        connection.isConnected = mongoose.connections[0].readyState;
        if (connection.isConnected === 1) {
            console.log("Use Previous Connection");
            return;
        }
        await mongoose.disconnect();
    }
    const db = await mongoose.connect(process.env.MONGODB_URL);
    console.log("New Connection");
    connection.isConnected = db.connections[0].readyState;
};

const db = { connect };
export default db;
