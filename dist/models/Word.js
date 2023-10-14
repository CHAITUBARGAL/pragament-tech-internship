"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// src/models/Word.ts
const mongoose_1 = __importDefault(require("mongoose"));
const wordSchema = new mongoose_1.default.Schema({
    word: { type: String, unique: true },
    meaning: String,
});
const WordModel = mongoose_1.default.model('Word', wordSchema);
exports.default = WordModel;
