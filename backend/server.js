const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const noteRoutes = require('./routes/noteRoutes');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MongoDB Connection
mongoose.connect('mongodb://localhost:27017/notizverwaltungssystem', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB verbunden...'))
  .catch(err => console.error(err));

// Routes
app.use('/api/notes', noteRoutes);

app.listen(PORT, () => {
  console.log(`Server läuft auf Port ${PORT}`);
});
