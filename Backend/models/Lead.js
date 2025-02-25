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
