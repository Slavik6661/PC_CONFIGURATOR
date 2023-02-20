import {Schema, model} from 'mongoose';

const M2_SSD = new Schema({
  Type: String,
  Model: {type: String, unique: true},
  Manufacturer_company: String,
  Volume: String,
  Key_M2_connector: String,
  NVMe: Boolean,
});
export default model('M2_SSD', M2_SSD);
