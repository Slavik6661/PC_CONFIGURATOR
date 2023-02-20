import mongoose from 'mongoose';
const mongoURL = process.env.MONGODB_URI;
try {
  mongoConnect();
  console.log('connected DB ');
} catch (error) {
  console.log(error);
}
export async function mongoConnect() {
  console.log('mongoURL', mongoURL);
  if (mongoURL) {
    await mongoose.connect(mongoURL);
  }
}
// catch(err => console.log(err));
