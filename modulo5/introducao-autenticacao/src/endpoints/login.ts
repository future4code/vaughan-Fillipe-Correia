import { Request, Response } from "express";
import connection from "../connection";
import { generateToken } from "../services/generateToken";


export async function login (req: Request, res: Response) {
    const { email, password } = req.body;
    try{
    
        if (!email || !password) {
            return res.status(400).json({
            error: "Missing data",
            });
        }
    
        if (email.indexOf("@") === -1) {
            return res.status(400).json({
            error: "Invalid email",
            });
        }
    
        if (password.length < 6) {
            return res.status(400).json({
            error: "Invalid password, must be at least 6 characters",
            });
        }
        
        const user = await connection("users_autenticacao")
            .select("*")
            .where("email", email)
            .first();
        
        if (!user) {
            return res.status(404).json({
                error: "User not found"
            });
        }
        
        if (user.password !== password) {
            return res.status(401).json({
                error: "Invalid password, wrowng password"
            });
        }
        
        const token = generateToken({ id: user.id });
        
        res.status(200).send({
            token,
          });
        } catch (err:any) {
          res.status(400).send({
            message: err.message,
          });
        }
    }