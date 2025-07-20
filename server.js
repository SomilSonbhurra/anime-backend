  const express = require('express');
  const mongoose = require('mongoose');
  const cors = require('cors');
  require('dotenv').config();

  const authRoutes = require('./routes/auth');

  const app = express();
  app.use(cors({
  origin: 'https://https://anime-website-chi-wheat.vercel.app/', // ⬅️ Replace with your real frontend Vercel URL
  credentials: true
}))
  app.use(express.json());

  mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error(err));

  app.use('/api/auth', authRoutes);

  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
