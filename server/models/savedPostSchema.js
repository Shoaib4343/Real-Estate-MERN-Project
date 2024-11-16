const mongoose = require('mongoose');

const savedPostSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }, // Reference to User
  post: { type: mongoose.Schema.Types.ObjectId, ref: 'Post', required: true }, // Reference to Post
  createdAt: { type: Date, default: Date.now }
});

// To ensure a user can only save a post once, create a compound index
savedPostSchema.index({ user: 1, post: 1 }, { unique: true });

module.exports = mongoose.model('SavedPost', savedPostSchema);
