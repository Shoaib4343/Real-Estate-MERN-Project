const mongoose = require('mongoose');

const postDetailSchema = new mongoose.Schema({
  desc: { type: String, required: true },
  utilities: { type: String },
  pet: { type: String },
  income: { type: String },
  size: { type: Number },
  school: { type: Number },
  bus: { type: Number },
  restaurant: { type: Number },
  post: { type: mongoose.Schema.Types.ObjectId, ref: 'Post', required: true }, // Reference to Post schema
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('PostDetail', postDetailSchema);
