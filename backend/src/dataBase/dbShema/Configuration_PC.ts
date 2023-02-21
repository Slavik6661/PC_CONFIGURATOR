import {Schema, model} from 'mongoose';

const Configuration_PC = new Schema({
  CPU: String,
  Motherboard: String,
  Frame: String,
  Video_card: String,
  CPU_Cooling: String,
  RAM: String,
  Data_storage: String,
  Power_unit: String,
});
export default model('Configuration_PC', Configuration_PC);
