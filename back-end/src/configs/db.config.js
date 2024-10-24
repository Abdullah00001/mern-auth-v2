import mongoose from 'mongoose';

export const databaseConnect = async () => {
  try {
    const connect = await mongoose.connect(
      `mongodb+srv://${process.env.CLUSTER_USERNAME}:${process.env.CLUSTER_PASSWORD}@backend.bmcqp.mongodb.net/${process.env.DATABASE_NAME}?retryWrites=true&w=majority&appName=BACKEND`
    );
    console.log(
      `🗂️   Database Connected\n📝  Database Name: ${process.env.DATABASE_NAME}`
    );
  } catch (error) {
    console.error(`⚠️   Database Connection Failed\nError:${error.message}`);
    process.exit(1);
  }
};
