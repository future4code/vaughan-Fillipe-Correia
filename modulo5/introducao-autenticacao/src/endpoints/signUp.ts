import { Request, Response } from "express";
import { generateToken } from "../services/generateToken";
import { generateId } from "../services/generateId";
import {createUser} from './createUser'

export async function signUp(req: Request, res: Response) {
    const { email, password, name, nickname} = req.body;
    try{
    
        if (!email || !password || !name || !nickname) {
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
        
        const userId = generateId();

        const token = generateToken({ id: userId });
    
        await createUser(userId, email, password, name, nickname);
        
        res.status(200).send({
            token,
          });
        } catch (err:any) {
          res.status(400).send({
            message: err.message,
          });
        }
    }