// routes/index.js
import express from 'express';
import imageRoutes from './imageRoutes.js';

const router = express.Router();

// Other routes can be added here





router.get('/', (req, res) => {
    // You can render an HTML page using your EJS template engine.
    // Replace 'index' with the actual name of your EJS template file.

    const image = [
      { url: '../images/i.jpg', filename: 'Image 1', size: 1024 },
      { url: 'image2.jpg', filename: 'Image 2', size: 2048 },
      // Add more image objects as needed
    ];
    res.render('index', { image: image });

    // res.render('image');
  })





// Use the imageRoutes
router.use('/', imageRoutes);



export default router;
