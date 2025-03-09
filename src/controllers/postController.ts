import { Request, Response } from 'express';
import { fetchPosts, fetchPostById } from '../services/postService';

export const getAllPosts = async (req: Request, res: Response) => {
    try {
        const posts = await fetchPosts();
        res.json(posts);
    } catch (error: unknown) {
        if (error instanceof Error) {
            console.error(error.message);
        } else {
            console.error("Произошла неизвестная ошибка", error);
        }
    }
};

export const getPostById = async (req: Request, res: Response) => {
    try {
        const post = await fetchPostById(parseInt(req.params.id, 10));
        res.json(post);
    } catch (error: unknown) {
        if (error instanceof Error) {
            console.error(error.message);
        } else {
            console.error("Произошла неизвестная ошибка", error);
        }
    }
};
