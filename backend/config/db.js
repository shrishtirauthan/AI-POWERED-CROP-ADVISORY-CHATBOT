import mongoose from "mongoose";

const connectDB = async () => {
  console.log("Current MONGO_URI:", process.env.MONGO_URI);

  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      serverSelectionTimeoutMS: 10000,
    });

    console.log(`✅ MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error("❌ Database Connection Failed");
    console.error(error);
    process.exit(1);
  }
};

export default connectDB;