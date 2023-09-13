// routes/uploads.js

const express = require('express');
const router = express.Router();

// Assuming you have the array of uploaded images defined somewhere
const uploadedImages = [
  // ... array of uploaded images ...
];

// Define a route to render the EJS template
router.get('/uploaded_images', (req, res) => {
  res.render('uploaded_images', { data: uploadedImages });
});

module.exports = router;
