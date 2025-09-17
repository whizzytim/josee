
const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const authRoutes = require('./routes/authRoutes');
const mpesaRoutes = require('./routes/mpesaRoutes');

dotenv.config();
const app = express();

app.use(express.json());
app.use('/api/auth', authRoutes);
app.use('/api/mpesa', mpesaRoutes);

mongoose.connect('mongodb://127.0.0.1:27017/mpesa-ecom')
  .then(() => {
    app.listen(5000, () => console.log('Server running on port 5000'));
  });
