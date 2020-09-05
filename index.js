const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const config = require('./config');
const jwt = require('jsonwebtoken');

const app = express();

// MongoDB
mongoose.connect(config.mongoDbUri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected...'))
    .catch(err => console.error(err));

// Bodyparser
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// CORS
app.use(cors());

// Routes
app.use('/', require('./routes/auth'));
app.use('/test', require('./routes/test'));

// Listen
const PORT = process.env.port || 5000;
app.listen(PORT, console.log(`Server started on port ${PORT}`));

