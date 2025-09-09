import mongoose from 'mongoose';

const bookSchema = new mongoose.Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  genre: String,
  publicationYear: Number,
  availability: { type: Boolean, default: true }
});

export default mongoose.model('Book', bookSchema);
