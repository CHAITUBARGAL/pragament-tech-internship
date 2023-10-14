// src/models/Word.ts
import mongoose from 'mongoose';

const wordSchema = new mongoose.Schema({
  word: { type: String, unique: true },
  meaning: String,
});

const WordModel = mongoose.model('Word', wordSchema);

export default WordModel;
