const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
  title: { type: String, required: true },
  price: { type: Number, required: true },
  images: { type: [String], required: true }, // Array of image URLs
  address: { type: String, required: true },
  city: { type: String, required: true },
  bedroom: { type: Number, required: true },
  bathroom: { type: Number, required: true },
  latitude: { type: String, required: true },
  longitude: { type: String, required: true },
  type: { type: String, enum: ['buy', 'rent'], required: true }, // Enum for type (buy or rent)
  property: { type: String, enum: ['apartment', 'house', 'condo', 'land'], required: true }, // Enum for property type
  createdAt: { type: Date, default: Date.now },
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }, // Reference to User schema
  postDetail: { type: mongoose.Schema.Types.ObjectId, ref: 'PostDetail' }, // Optional reference to PostDetail schema
  savedPosts: [{ type: mongoose.Schema.Types.ObjectId, ref: 'SavedPost' }] // Reference to SavedPost schema
});

module.exports = mongoose.model('Post', postSchema);
