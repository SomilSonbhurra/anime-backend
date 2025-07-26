const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();



const authRoutes = require('./routes/auth');


//  CORS config for Vercel frontend
app.use(cors({
  origin: ['http://localhost:3000', 'https://anime-website-chi-wheat.vercel.app'],
  credentials: true,
}));
app.use(express.json());


// MongoDB connection without deprecated options
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log("MongoDB connected"))
  .catch(err => console.error("MongoDB Error: ", err));

//  Routes
app.use('/api/auth', authRoutes);

app.get('/api/test', (req, res) => {
  res.json({ message: "Backend connected successfully!" });
});


//  Server start
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
