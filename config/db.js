// config/db.js
import mongoose from 'mongoose';

const connectToDatabase = async () => {
  try {
    await mongoose.connect('mongodb://localhost/img', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connected to the database');
  } catch (error) {
    console.error('Error connecting to the database:', error);
    process.exit(1);
  }
};

export default connectToDatabase;
