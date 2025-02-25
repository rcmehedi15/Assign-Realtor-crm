const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(cors());

// Database Connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log('MongoDB Connected')).catch(err => console.log(err));

// Import Routes
const leadRoutes = require('./routes/leads');
app.use('/api/leads', leadRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
