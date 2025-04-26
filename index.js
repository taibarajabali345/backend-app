require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const userRoutes = require('./routes');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());
const cors = require("cors");
app.use(cors({
  origin: process.env.FRONTEND_URL,
  credentials: true,
}));


// Routes
app.use('/api', userRoutes);

// MongoDB connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
