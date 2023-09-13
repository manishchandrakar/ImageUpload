// models/Image.js
import mongoose from 'mongoose';

const imageSchema = new mongoose.Schema({
  filename: String,
  // Add other image-related fields here
});

export default mongoose.model('Image', imageSchema);
