import User from "../model/User"
import { FindByEmailResponse } from "../types/findByEmailResponse"
import { FindByIdResponse } from "../types/findByIdResponse"
import { BaseDatabase } from "./BaseDatabase"

export default class UserData extends BaseDatabase {
    protected TABLE_NAME = "User_Labook"

    insert = async (user: User) => {
        try {
            await this
                .connection(this.TABLE_NAME)
                .insert(user)
        } catch (error) {
            if (error instanceof Error) {
                throw new Error(error.message)
            } else {
                throw new Error("Erro do banco !")
            }
        }
    }

    findByEmail = async (email: string) => {
        try {
            const queryResult: FindByEmailResponse = await this
                .connection(this.TABLE_NAME)
                .select()
                .where({ email })

            return queryResult[0]
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
            const queryResult: FindByIdResponse = await this
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