// signaling-server.js
// This is a WebSocket signaling server for WebRTC video chat

const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const cors = require('cors');

const app = express();
const server = http.createServer(app);
const io = socketIo(server, {
    cors: {
        origin: "*",
        methods: ["GET", "POST"]
    }
});

app.use(cors());
app.use(express.static('public'));

// Store active rooms and users
const rooms = new Map();

io.on('connection', (socket) => {
    console.log('New client connected:', socket.id);

    // Create or join a room
    socket.on('join-room', (roomId) => {
        console.log(`Socket ${socket.id} joining room ${roomId}`);
        
        // Leave any existing rooms
        Array.from(socket.rooms).forEach(room => {
            if (room !== socket.id) {
                socket.leave(room);
            }
        });

        socket.join(roomId);
        
        // Initialize room if it doesn't exist
        if (!rooms.has(roomId)) {
            rooms.set(roomId, new Set());
        }
        
        const room = rooms.get(roomId);
        room.add(socket.id);

        // Notify others in the room
        socket.to(roomId).emit('user-connected', socket.id);
        
        // Send list of existing users to the new user
        const otherUsers = Array.from(room).filter(id => id !== socket.id);
        socket.emit('room-users', otherUsers);

        console.log(`Room ${roomId} now has ${room.size} users`);
    });

    // Relay WebRTC offer
    socket.on('offer', (data) => {
        console.log(`Relaying offer from ${socket.id} to ${data.target}`);
        io.to(data.target).emit('offer', {
            offer: data.offer,
            sender: socket.id
        });
    });

    // Relay WebRTC answer
    socket.on('answer', (data) => {
        console.log(`Relaying answer from ${socket.id} to ${data.target}`);
        io.to(data.target).emit('answer', {
            answer: data.answer,
            sender: socket.id
        });
    });

    // Relay ICE candidates
    socket.on('ice-candidate', (data) => {
        console.log(`Relaying ICE candidate from ${socket.id} to ${data.target}`);
        io.to(data.target).emit('ice-candidate', {
            candidate: data.candidate,
            sender: socket.id
        });
    });

    // Handle disconnection
    socket.on('disconnect', () => {
        console.log('Client disconnected:', socket.id);
        
        // Remove user from all rooms
        rooms.forEach((users, roomId) => {
            if (users.has(socket.id)) {
                users.delete(socket.id);
                // Notify others in the room
                socket.to(roomId).emit('user-disconnected', socket.id);
                
                // Clean up empty rooms
                if (users.size === 0) {
                    rooms.delete(roomId);
                }
            }
        });
    });
});

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
    console.log(`✅ Signaling server running on port ${PORT}`);
    console.log(`🌍 Open http://localhost:${PORT} in your browser`);
});
