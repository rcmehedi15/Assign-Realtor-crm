// backend/server 
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

// backend/models/Lead.js
const mongoose = require('mongoose');

const LeadSchema = new mongoose.Schema({
  name: String,
  address: String,
  phone: String,
  email: String,
  project: String,
  notes: String,
  meetingTime: Date,
  followUpHistory: [{ date: Date, note: String }],
});

module.exports = mongoose.model('Lead', LeadSchema);

// backend/routes/leads.js
const express = require('express');
const router = express.Router();
const Lead = require('../models/Lead');

// Create a new lead
router.post('/', async (req, res) => {
  try {
    const newLead = new Lead(req.body);
    await newLead.save();
    res.status(201).json(newLead);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get all leads
router.get('/', async (req, res) => {
  try {
    const leads = await Lead.find();
    res.json(leads);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
