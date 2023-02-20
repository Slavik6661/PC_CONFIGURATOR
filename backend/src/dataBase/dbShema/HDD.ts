import {Schema, model} from 'mongoose';

const HDD = new Schema({
  Type: String,
  Model: {type: String, unique: true},
  Manufacturer_company: String,
  Volume: String,
  Interface: String,
});
export default model('HDD', HDD);
