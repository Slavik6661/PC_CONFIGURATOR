import {Schema, model} from 'mongoose';

const Frame = new Schema({
  type: String,
  model: {type: String, unique: true},
  manufacturer_company: String,
  frame: String,
  frame_size: String,
  motherboard_orientation: String,
  length: String,
  width: String,
  height: String,
  compatible_board_form_factor: Array,
  compatible_psu_form_factor: Array,
  supported_fans: {
    front: String,
    top: String,
    rear: String,
    bottom: String,
  },
});
export default model('Frame', Frame);
