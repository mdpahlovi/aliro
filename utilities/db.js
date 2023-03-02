import mongoose from "mongoose";

const connection = {};
const mongodb_url = "mongodb+srv://admin:LH5DxAOEqot6u0k3@cluster0.ctxbdjj.mongodb.net/?retryWrites=true&w=majority";

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
    const db = await mongoose.connect(mongodb_url);
    console.log("New Connection");
    connection.isConnected = db.connections[0].readyState;
};

const db = { connect };
export default db;
