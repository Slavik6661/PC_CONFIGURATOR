"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var SSD_SATA = new mongoose_1.Schema({
    Type: String,
    Model: { type: String, unique: true },
    Manufacturer_company: String,
    volume: String,
    Interface: String,
});
exports.default = (0, mongoose_1.model)('SSD_SATA ', SSD_SATA);
