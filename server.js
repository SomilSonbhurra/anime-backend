const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const authRoutes = require('./routes/auth');

const app = express();

// ✅ Middleware
app.use(cors({
  origin: 'https://anime-website-chi-wheat.vercel.app', // ✅ Your Vercel frontend
  credentials: true
}));
app.use(express.json());

// ✅ MongoDB connection (cleaned)
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('✅ MongoDB connected'))
  .catch(err => console.error('❌ MongoDB connection error:', err));

// ✅ Routes
app.use('/api/auth', authRoutes);

app.get('/', (req, res) => {
  res.json({ message: '✅ Backend is working fine!' });
});


app.get('/api/test', (req, res) => {
  res.send('✅ Backend is working!');
});

// ✅ Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
