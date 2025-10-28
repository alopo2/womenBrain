import mongoose from 'mongoose';

const bookSchema = new mongoose.Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  genre: { type: String, required: true },
  publishedYear: { type: Date, required: true },
  file: {
    url: { type: String },         
    name: { type: String },          
    type: { type: String },          
    uploadedAt: { type: Date, default: Date.now },
    size: { type: Number }
  }
});

const Book = mongoose.model('Book', bookSchema);

export default Book;
