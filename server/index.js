require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const http = require('http');
const { Server } = require('socket.io');
const { MongoMemoryServer } = require('mongodb-memory-server');
const Lead = require('./models/Lead');

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: '*',
    methods: ['GET', 'POST'],
  },
});

app.use(cors());
app.use(express.json());

// Socket.io for Live Stats
let activeViewers = 15; // Base starting viewers
let seatsLeft = 40; // Total cohort size

io.on('connection', (socket) => {
  activeViewers += Math.floor(Math.random() * 3);
  io.emit('stats_update', { activeViewers, seatsLeft });

  socket.on('disconnect', () => {
    activeViewers = Math.max(5, activeViewers - 1);
    io.emit('stats_update', { activeViewers, seatsLeft });
  });
});

// APIs
app.post('/api/enroll', async (req, res) => {
  try {
    const { name, email, targetRole } = req.body;
    
    // Save to DB
    const newLead = new Lead({ name, email, targetRole });
    await newLead.save();

    // Update global state and ping via socket
    if (seatsLeft > 0) seatsLeft--;
    io.emit('enroll_ping', { targetRole, seatsLeft });
    io.emit('stats_update', { activeViewers, seatsLeft });

    res.status(201).json({ success: true, message: 'Seat claimed successfully!' });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

app.get('/api/stats', (req, res) => {
  res.json({ activeViewers, seatsLeft });
});

// Initialize in-memory DB and start server
let mongoServer;
const startServer = async () => {
  mongoServer = await MongoMemoryServer.create();
  const uri = mongoServer.getUri();
  
  await mongoose.connect(uri);
  console.log('Connected to In-Memory MongoDB');

  const PORT = process.env.PORT || 5000;
  server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
};

startServer();
