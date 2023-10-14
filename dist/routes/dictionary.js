"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// src/routes/dictionary.ts
const express_1 = __importDefault(require("express"));
const axios_1 = __importDefault(require("axios"));
const Word_1 = __importDefault(require("../models/Word"));
const router = express_1.default.Router();
router.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const query = req.query.query;
    // Check MongoDB for the word meaning
    const word = yield Word_1.default.findOne({ word: query });
    if (word) {
        res.json({ meaning: word.meaning });
    }
    else {
        try {
            const dictionaryResponse = yield axios_1.default.get(`https://github.com/open-language/en-dictionary/${query}`);
            const meaning = dictionaryResponse.data.meaning;
            const newWord = new Word_1.default({ word: query, meaning });
            yield newWord.save();
            res.json({ meaning });
        }
        catch (error) {
            res.status(404).json({ error: 'Word not found in the dictionary' });
        }
    }
}));
exports.default = router;
