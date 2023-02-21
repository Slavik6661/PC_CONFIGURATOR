import {Schema, model} from 'mongoose';

const User = new Schema({
  Email: {type: String, unique: true},
  Password: String,
  Configuration_PC: Array,
});
export default model('User', User);
