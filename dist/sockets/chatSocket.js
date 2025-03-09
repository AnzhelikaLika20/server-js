"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.chatSocket = void 0;
const chatSocket = (io) => {
    io.on('connection', (socket) => {
        console.log(`User connected: ${socket.id}`);
        socket.on('message', (message) => {
            io.emit('message', { id: socket.id, message });
        });
        socket.on('disconnect', () => {
            console.log(`User disconnected: ${socket.id}`);
        });
    });
};
exports.chatSocket = chatSocket;
