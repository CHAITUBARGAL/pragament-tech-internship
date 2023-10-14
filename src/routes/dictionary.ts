// src/routes/dictionary.ts
import express, { Request, Response } from 'express';
import axios from 'axios';
import WordModel from '../models/Word';

const router = express.Router();

router.get('/', async (req: Request, res: Response) => {
  const query = req.query.query as string;

  // Check MongoDB for the word meaning
  const word = await WordModel.findOne({ word: query });

  if (word) {
    res.json({ meaning: word.meaning });
  } else {
    try {
      const dictionaryResponse = await axios.get(`https://github.com/open-language/en-dictionary/${query}`);
      const meaning = dictionaryResponse.data.meaning;
      
      const newWord = new WordModel({ word: query, meaning });
      await newWord.save();

      res.json({ meaning });
    } catch (error) {
      res.status(404).json({ error: 'Word not found in the dictionary' });
    }
  }
});

export default router;
