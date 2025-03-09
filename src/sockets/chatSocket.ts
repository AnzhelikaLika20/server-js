import { Server, Socket } from 'socket.io';

export const chatSocket = (io: Server) => {
    io.on('connection', (socket: Socket) => {
        console.log(`User connected: ${socket.id}`);

        socket.on('message', (message) => {
            io.emit('message', { id: socket.id, message });
        });

        socket.on('disconnect', () => {
            console.log(`User disconnected: ${socket.id}`);
        });
    });
};
