// Import necessary modules
import express from 'express';
import path from 'path';
import routes from './routes/index.js'; // Import your route definitions
// import uploadsRouter from './routes/uploads.js';
import connectToDatabase from './config/db.js'; // Import your database connection function
import { fileURLToPath } from 'url'; // Import the fileURLToPath function

// Create an instance of Express.js
const app = express();

// Connect to the database
connectToDatabase();

// Get the current module's file path
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configure middleware, views, and static files
app.set('view engine', 'ejs'); // Uncomment these lines if you want to use EJS as your view engine
app.set('views', path.join(__dirname, 'view')); // Specify the views directory
app.use(express.static(path.join(__dirname, 'public'))); // Specify the public directory for static files

// Use the routes
app.use('/', routes);
// app.use('/uploads', uploadsRouter);

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
