"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var HDD = new mongoose_1.Schema({
    Type: String,
    Model: { type: String, unique: true },
    Manufacturer_company: String,
    Volume: String,
    Interface: String,
});
exports.default = (0, mongoose_1.model)('HDD', HDD);
