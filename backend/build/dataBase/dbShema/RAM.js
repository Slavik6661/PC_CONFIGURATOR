"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var RAM = new mongoose_1.Schema({
    type: String,
    model: { type: String, unique: true },
    manufacturer_company: String,
    memory_type: String,
    memory_form_factor: String,
    memory_module_capacity: String,
});
exports.default = (0, mongoose_1.model)('RAM', RAM);
