import connection from "../connection";
import { user } from "../types";

export async function createUser (id: string, email: string, password: string, name: string, nickname: string) {
    await connection
    .insert({
        id,
        email,
        password,
        name,
        nickname
    })
    .into("users_autenticacao");
}