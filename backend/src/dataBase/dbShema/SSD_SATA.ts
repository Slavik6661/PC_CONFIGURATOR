import {Schema, model} from 'mongoose';

const SSD_SATA = new Schema({
  Type: String,
  Model: {type: String, unique: true},
  Manufacturer_company: String,
  volume: String,
  Interface: String,
});
export default model('SSD_SATA ', SSD_SATA);
