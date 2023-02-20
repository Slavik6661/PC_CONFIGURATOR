import {Schema, model} from 'mongoose';

const GPU = new Schema({
  type: String,
  model: {type: String, unique: true},
  manufacturer_company: String,
  gpu: String,
  microarchitecture: String,
  process_technology: String,
  video_memory_size: String,
  memory_type: String,
  memory_bus_width: String,
  nominal_frequency_of_video_chip: String,
  video_connectors: String,
  recommended_psu: String,
  video_card_length: String,
  video_card_width: String,
  graphics_card_thickness: String,
});
export default model('GPU', GPU);
