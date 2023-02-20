"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var Frame = new mongoose_1.Schema({
    type: String,
    model: { type: String, unique: true },
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
exports.default = (0, mongoose_1.model)('Frame', Frame);
