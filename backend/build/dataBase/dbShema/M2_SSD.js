"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var M2_SSD = new mongoose_1.Schema({
    Type: String,
    Model: { type: String, unique: true },
    Manufacturer_company: String,
    Volume: String,
    Key_M2_connector: String,
    NVMe: Boolean,
});
exports.default = (0, mongoose_1.model)('M2_SSD', M2_SSD);
