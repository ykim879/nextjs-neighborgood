import mongoose from 'mongoose';

const connectDB = async (): Promise<void> => {
  if(!process.env.MONGODB_URL) {
    return;
  }
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URL);

    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (err) {
    console.error(`Error: ${err}`);
    process.exit(1);
  }
};

export default connectDB;
