import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI);
    console.log('MonogDB connected: ',conn.connection.host);
  } catch (error) {
    console.error('Server ERRRO:',error);
    process.exit(1) // 1 code means a failure, 0 means SUCCESS
  }
}