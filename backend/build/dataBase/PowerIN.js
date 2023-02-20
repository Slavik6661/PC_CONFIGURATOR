"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var PowerIN = new mongoose_1.Schema({
    Type: String,
    Model: { type: String, unique: true },
    Manufacturer_company: String,
    Power_nominal: String,
    Form_Factor: String,
});
exports.default = (0, mongoose_1.model)('PowerIN', PowerIN);
