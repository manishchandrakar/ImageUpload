// controllers/imageController.js
import Image from '../models/Image.js';

export const uploadImage = async (req, res) => {
  try {
    // Handle image upload here and save its metadata to the database
    const image = new Image({ filename: req.file.filename });
    await image.save();
    res.redirect('/');
  } catch (error) {
    console.error(error);
    res.status(500).send('Error uploading the image.');
  }
};
