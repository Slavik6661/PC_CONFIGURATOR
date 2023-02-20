import {Schema, model} from 'mongoose';

const CPU = new Schema({
  model: {type: String, unique: true},
  manufacturer_company: String,
  socket: String,
  total_number_of_cores: String,
  maximum_number_of_threads: String,
  cpu_base_frequency: String,
  maximum_frequency_in_turbo_mode: String,
  memory_type: String,
  maximum_supported_memory: String,
  number_of_channels: String,
  maximum_RAM_frequency: String,
  heat_dissipation_TDP: String,
  maximum_CPU_temperature: String,
});
export default model('CPU', CPU);
