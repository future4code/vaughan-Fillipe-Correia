import connection from "../connection";
import { user } from "../types";

export async function createUser (id: string, email: string, password: string, name: string, nickname: string, role: string) {
    await connection
    .insert({
        id,
        email,
        password,
        name,
        nickname,
        role
    })
    .into("users_autenticacao");
}