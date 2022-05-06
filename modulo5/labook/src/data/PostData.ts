import Post from "../model/Post"
import { BaseDatabase } from "./BaseDatabase"
import { FindPostResponse } from "../types/findPostResponse"
import { FindFollowersResponse } from "../types/findFollowersResponse"


export default class PostData extends BaseDatabase{
    protected TABLE_NAME = "Labook_posts"
    protected FOLLOWERS_TABLE_NAME = "Labook_followers"
    

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
            const queryResult: FindPostResponse = await this
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

    getFeed = async (id: string) => {
        try {
            const queryResultFollowers: FindFollowersResponse = await this
                .connection(this.FOLLOWERS_TABLE_NAME)
                .select()
                .where({ follower_id: id })

            const followedUsersIds = queryResultFollowers.map(follower => follower.followed_id)

            const queryResultPosts: FindPostResponse = await this
                .connection(this.TABLE_NAME)
                .select()
                .where({user_id: followedUsersIds})
                .orderBy("created_at", "desc")

            return queryResultPosts
                

        } catch (error) {
            if (error instanceof Error) {
                throw new Error(error.message)
            } else {
                throw new Error("Erro do banco !")
            }
        }
    }

    getFeedByType = async (id: string, type: string) => {
        try {
            const queryResultFollowers: FindFollowersResponse = await this
                .connection(this.FOLLOWERS_TABLE_NAME)
                .select()
                .where({ follower_id: id })

            const followedUsersIds = queryResultFollowers.map(follower => follower.followed_id)

            const queryResultPosts: FindPostResponse = await this
                .connection(this.TABLE_NAME)
                .select()
                .where({user_id: followedUsersIds, post_type: type})
                .orderBy("created_at", "desc")

            return queryResultPosts

        } catch (error) {
            if (error instanceof Error) {
                throw new Error(error.message)
            }
            throw new Error("Erro do banco !")
        }
    }

    getFeedByPage = async (id: string, page: number) => {
        try {
            const queryResultFollowers: FindFollowersResponse = await this
                .connection(this.FOLLOWERS_TABLE_NAME)
                .select()
                .where({ follower_id: id })

            const followedUsersIds = queryResultFollowers.map(follower => follower.followed_id)

            const queryResultPosts: FindPostResponse = await this
                .connection(this.TABLE_NAME)
                .select()
                .where({user_id: followedUsersIds})
                .orderBy("created_at", "desc")
                .limit(5)
                .offset((page -1) * 5)

            return queryResultPosts

        } catch (error) {
            if (error instanceof Error) {
                throw new Error(error.message)
            }
            throw new Error("Erro do banco !")
        }
    }

}