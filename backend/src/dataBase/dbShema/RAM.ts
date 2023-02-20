import {Schema, model} from 'mongoose';

const RAM = new Schema({
  type: String,
  model: {type: String, unique: true},
  manufacturer_company: String,
  memory_type: String,
  memory_form_factor: String,
  memory_module_capacity: String,
});
export default model('RAM', RAM);
