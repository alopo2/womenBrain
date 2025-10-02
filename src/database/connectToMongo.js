import mongoose from 'mongoose';
import 'dotenv/config'

const mongoUri = process.env.MONGO_URI

const clientOptions = { serverApi: { version: '1', strict: true, deprecationErrors: true } };
export async function run() {
  try {
    await mongoose.connect(mongoUri, clientOptions);
    await mongoose.connection.db.admin().command({ ping: 1 });
    console.log("You successfully connected to MongoDB!");
  } finally {
    await mongoose.disconnect();
  }
}
run().catch(console.dir);