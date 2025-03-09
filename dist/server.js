"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = require("http");
const socket_io_1 = require("socket.io");
const app_1 = __importDefault(require("./app"));
const chatSocket_1 = require("./sockets/chatSocket");
const server = (0, http_1.createServer)(app_1.default);
const io = new socket_io_1.Server(server);
(0, chatSocket_1.chatSocket)(io);
const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
