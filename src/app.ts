import express from 'express';
import { getAllPosts, getPostById } from './controllers/postController';

const app = express();
const PORT = 3000;

app.get('/posts', getAllPosts);
app.get('/posts/:id', getPostById);

export default app;
