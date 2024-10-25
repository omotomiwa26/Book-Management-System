const mongoose = require('mongoose');

//Creating Books schema
const bookSchema = new mongoose.Schema({
  title: { type: String, required: true},
  author: { type: String, required: true},
  genre: { type: String},
  description: { type: String},
  rating: { type: Number, max: 10},
  published_date: { type: Date},
  owner: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }
});


//Creating Books model from books schema
module.exports = mongoose.model('Book', bookSchema);
