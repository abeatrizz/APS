const express = require('express');
const connectDB = require('./config/db');
const roupasRoutes = require('./routes/roupasRoutes');

const app = express();
app.use(express.json());

connectDB();

app.use('/roupas', roupasRoutes);

module.exports = app;