import mongoose from 'mongoose';
import { enviroment } from './enviroment.js';

let connecLogin;

const connectDB = async () => {
  try {
    await mongoose.connect(enviroment.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      dbName: enviroment.DATABASE_NAME,
    });
    console.log('MongoDB connected successfully!');
    connecLogin = mongoose.connection;  // Store the connection
  } catch (error) {
    console.error('MongoDB connection error:', error);
    process.exit(1);
  }
};

export const CONNECT_DB = async () => {
  await connectDB(); // Call the connectDB function to establish the connection
};

export const CLOSE_DB = async () => {
  if (connecLogin) {
    await connecLogin.close(); // Close the connection properly
    console.log('MongoDB connection closed.');
  } else {
    console.error('No active MongoDB connection to close.');
  }
};

export const GET_DB = () => {
  if (!connecLogin) throw new Error('Chưa kết nối DB!');
  return connecLogin; // Return the active connection
};

  