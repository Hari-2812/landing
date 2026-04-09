const mongoose = require('mongoose');

const LeadSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  targetRole: { type: String, required: true },
  status: { type: String, default: 'Pending' }, 
  timestamp: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Lead', LeadSchema);
