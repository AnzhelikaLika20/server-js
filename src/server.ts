import { createServer } from 'http';
import { Server } from 'socket.io';
import app from './app';
import { chatSocket } from './sockets/chatSocket';

const server = createServer(app);
const io = new Server(server);

chatSocket(io);

const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
