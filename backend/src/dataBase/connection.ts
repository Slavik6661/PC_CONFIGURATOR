import mongoose from 'mongoose';
import dotenv from 'dotenv';
import path from 'path';
dotenv.config({path: path.join(__dirname, '../.env')});
const mongoURL = process.env.MONGODB_URI;
mongoConnect().catch(err => console.log(err));
export async function mongoConnect() {
  if (mongoURL) {
    console.log(mongoURL);

    mongoose.connect(mongoURL);
  }
}
