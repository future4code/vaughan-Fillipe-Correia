import connection from "../connection";
import { Request, Response } from "express";

export async function getUserByEmail (req: Request, res: Response) {
    try {
        const email = req.params.email;
        const user = await connection("users_autenticacao")
            .select("*")
            .where("email", email)
            .first();
        if (!user) {
            return res.status(404).json({
                error: "User not found"
            });
        }
        return res.json(user);
    } catch (err:any) {
        return res.status(500).json({
            error: err.message
        });
    }
}