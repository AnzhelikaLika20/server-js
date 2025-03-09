"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const postController_1 = require("./controllers/postController");
const app = (0, express_1.default)();
const PORT = 3000;
app.get('/posts', postController_1.getAllPosts);
app.get('/posts/:id', postController_1.getPostById);
exports.default = app;
