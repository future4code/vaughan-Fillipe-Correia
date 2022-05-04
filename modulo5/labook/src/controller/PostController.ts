import { Request, Response } from "express";
import PostBusiness from "../business/PostBusiness";
import { PostInputDTO } from "../types/postInputDTO";


export default class PostController {
    constructor(
        private postBusiness: PostBusiness
    ){}

    public createPost = async (req: Request, res: Response) => {
        try {
            const token = req.headers.authorization as string;
            const post: PostInputDTO = {
                title: req.body.title,
                body: req.body.body,
                image_url: req.body.image_url,
                post_type: req.body.post_type
            }
            await this.postBusiness.createPost(post, token)
            res.status(200).send({
                message: "Post criado com sucesso", post
            })
        } catch (error) {
            if (error instanceof Error) {
                return res.status(400).send(error.message)
            }
            res.status(500).send("Erro no signup")
        }
    }

    public getPostById = async (req: Request, res: Response) => {
        try {
            const post = await this.postBusiness.getPostById(req.params.id)
            res.status(200).send({
                message: "Post encontrado com sucesso", post
            })
        } catch (error) {
            if (error instanceof Error) {
                return res.status(400).send(error.message)
            }
            res.status(500).send("Erro no signup")
        }

    }
}