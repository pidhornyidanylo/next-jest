import mongoose from "mongoose";

interface Connection {
  isConnected?: boolean;
}

const connection: Connection = {};

export const connectToDb = async () => {
  if (connection.isConnected) {
    console.log("Using existing database connection");
    return { isConnected: true };
  }
  try {
    const db = await mongoose.connect("mongodb://localhost:27017/");
    connection.isConnected = db.connections[0].readyState === 1;
    return { isConnected: true };
  } catch (error) {
    return { isConnected: false };
  }
};
