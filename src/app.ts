
import express from 'express';
import dictionaryRouter from './routes/dictionary';

const app = express();

app.use('/api/dictionary', dictionaryRouter);

export default app;
