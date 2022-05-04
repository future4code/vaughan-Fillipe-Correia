import Post from "../model/Post"
import { BaseDatabase } from "./BaseDatabase"
import { FindPostByIdResponse } from "../types/findPostByIdResponse"


export default class PostData extends BaseDatabase{
    protected TABLE_NAME = "Labook_posts"
    

    insert = async (post: Post) => {
        try {
            await this
                .connection(this.TABLE_NAME)
                .insert(post)
        } catch (error) {
            if (error instanceof Error) {
                throw new Error(error.message)
            } else {
                throw new Error("Erro do banco !")
            }
        }
    }

    findById = async (id: string) => {
        try {
            const queryResult: FindPostByIdResponse = await this
                .connection(this.TABLE_NAME)
                .select()
                .where({ id })
                
            return queryResult[0]
        } catch (error) {
            if (error instanceof Error) {
                throw new Error(error.message)
            } else {
                throw new Error("Erro do banco !")
            }

        }
    }


}