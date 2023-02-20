import {Schema, model} from 'mongoose';

const Configuration_PC = new Schema({
  Email: {type: String, unique: true},
  Password: String,
  Configuration_PC: [],
});
export default model('Configuration_PC', Configuration_PC);
