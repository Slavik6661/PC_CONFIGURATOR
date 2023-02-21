"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var User = new mongoose_1.Schema({
    Email: { type: String, unique: true },
    Password: String,
    Configuration_PC: Array,
});
exports.default = (0, mongoose_1.model)('User', User);
