
import mongoose from 'mongoose';

const mongoURI = 'mongodb+srv://chetan11:Chetan11@cluster0.i3lteiy.mongodb.net/dictionaryDB?retryWrites=true&w=majority'; 


mongoose.connect(mongoURI, {
 
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});
