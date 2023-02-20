"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var CPU_FAN = new mongoose_1.Schema({
    type: String,
    model: { type: String, unique: true },
    manufacturer_company: String,
    socket: Array,
    power_dissipation: String,
    fan_connector: Array,
    height: String,
    width: String,
    length: String,
});
exports.default = (0, mongoose_1.model)('CPU_FAN', CPU_FAN);
