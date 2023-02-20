"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var GPU = new mongoose_1.Schema({
    type: String,
    model: { type: String, unique: true },
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
exports.default = (0, mongoose_1.model)('GPU', GPU);
