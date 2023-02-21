"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var Configuration_PC = new mongoose_1.Schema({
    CPU: String,
    Motherboard: String,
    Frame: String,
    Video_card: String,
    CPU_Cooling: String,
    RAM: String,
    Data_storage: String,
    Power_unit: String,
});
exports.default = (0, mongoose_1.model)('Configuration_PC', Configuration_PC);
