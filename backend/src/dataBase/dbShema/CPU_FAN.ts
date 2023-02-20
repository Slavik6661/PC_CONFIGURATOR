import {Schema, model} from 'mongoose';

const CPU_FAN = new Schema({
  type: String,
  model: {type: String, unique: true},
  manufacturer_company: String,
  socket: Array,
  power_dissipation: String,
  fan_connector: Array,
  height: String,
  width: String,
  length: String,
});
export default model('CPU_FAN', CPU_FAN);
