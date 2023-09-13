import express from 'express';
import multer from 'multer';
import path from 'path';

const router = express.Router();

// An array to store information about uploaded images
const uploadedImages = [];

// Set up multer storage
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/images'); // Store files in the 'public/images' folder
  },
  filename: function (req, file, cb) {
    const extname = path.extname(file.originalname);
    const filename = `${Date.now()}${extname}`; // Generate a unique filename
    uploadedImages.push({ filename, originalname: file.originalname }); // Store image info
    cb(null, filename);
  },
});

// Create a multer instance with the storage configuration
const upload = multer({ storage: storage });

// Define a route for uploading files
router.post('/upload', upload.single('image'), (req, res) => {
  // The uploaded file is available as req.file
  if (!req.file) {
    return res.status(400).send('No file uploaded.');
  }

  // You can do further processing here if needed
  const image = `/images/${req.file.filename}`; // Image URL
  res.status(200).json({ imageUrl: image });
});

// Define a route to get the list of uploaded images
router.get('/uploaded', (req, res) => {
  res.json(uploadedImages);
});

export default router;
