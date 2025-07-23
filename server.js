import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/connection.js'; // adjust path as needed
import userRoutes from './routes/userRoute.js'; // your route file

dotenv.config();

const app = express();
app.use(express.json()); // For parsing JSON

// Routes
app.use('/api/users', userRoutes);

// Start server *after* DB is connected
const PORT = process.env.PORT || 3000;

const startServer = async () => {
  try {
    await connectDB(); // Wait for MongoDB to connect
    app.listen(PORT, () => {
      console.log(`🚀 Server running on port ${PORT}`);
    });
  } catch (error) {
    console.error("❌ Failed to start server:", error.message);
  }
};

startServer();
