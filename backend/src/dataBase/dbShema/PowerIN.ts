import {Schema, model} from 'mongoose';

const PowerIN = new Schema({
  Type: String,
  Model: {type: String, unique: true},
  Manufacturer_company: String,
  Power_nominal: String,
  Form_Factor: String,
});
export default model('PowerIN', PowerIN);
